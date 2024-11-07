import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  LoginTherapistInput,
  useLoginTherapistMutation
} from '@/src/gql/generated/graphql';
import { updateTokensInStorage } from '@/src/utils/tokenHandler';
import { useRouter, useSearchParams } from 'next/navigation';

export const loginSchema = z.object({
  email: z.string().min(1, { message: '아이디를 입력해주세요.' }),
  password: z.string().min(1, { message: '비밀번호를 입력해주세요.' }),
  saveEmail: z.boolean()
});

const useSignInForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const { handleSubmit, formState, getValues, watch, control } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
      saveEmail: false
    }
  });

  const [loginTherapist] = useLoginTherapistMutation({
    fetchPolicy: 'no-cache',
    onCompleted: ({ loginTherapist }) => {
      const { accessToken, refreshToken, refreshTokenExpiredAt } = loginTherapist;
      updateTokensInStorage({ accessToken, refreshToken, refreshTokenExpiredAt });

      if (getValues('saveEmail')) {
        window.localStorage.setItem('email', getValues('email'));
      } else {
        window.localStorage.removeItem('email');
      }

      const redirect = searchParams.get('redirect');
      router.push(redirect ? redirect : '/counseling/reservation');
    }
  });

  const onValid = (data: LoginTherapistInput) => {
    loginTherapist({
      variables: {
        input: {
          email: data.email,
          password: data.password
        }
      }
    });
  };
  const onInvalid = () => {};

  const onSubmit = () => {
    handleSubmit(onValid, onInvalid)();
  };

  return {
    loginTherapist,
    onSubmit,
    control,
    formState,
    watch,
    getValues
  };
};

export default useSignInForm;
