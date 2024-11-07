import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

export const verifySchema = z.object({
  name: z.string().min(1, { message: '아이디를 입력해주세요.' })
});

const useVerifyForm = () => {
  const { handleSubmit, formState, watch, control } = useForm({
    resolver: zodResolver(verifySchema),
    defaultValues: {
      name: ''
    }
  });

  return {
    handleSubmit,
    control,
    formState,
    watch
  };
};

export default useVerifyForm;
