import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

export const findPasswordSchema = z.object({
  password: z
    .string()
    .min(1, { message: '비밀번호를 입력해주세요.' })
    .regex(
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/,
      '8~20자 이내의 영문, 숫자, 특수문자를 모두 포함해야 합니다.'
    ),
  passwordConfirm: z.string().min(1, { message: '비밀번호를 재입력 입력해주세요.' })
});

const useFindPasswordForm = () => {
  const { handleSubmit, formState, watch, control } = useForm({
    resolver: zodResolver(findPasswordSchema),
    defaultValues: {
      password: '',
      passwordConfirm: ''
    }
  });

  return {
    handleSubmit,
    control,
    formState,
    watch
  };
};

export default useFindPasswordForm;
