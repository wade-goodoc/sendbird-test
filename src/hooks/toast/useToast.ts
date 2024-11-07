import { useSetRecoilState } from 'recoil';
import { ToastProps } from '../../components/feedbacks/Toast';
import { toastData } from '../../store/toast';

const useToast = () => {
  const setToast = useSetRecoilState(toastData);

  const showToast = (
    toastProps: ToastProps,
    duration?: number,
    onFinish?: () => void
  ) => {
    setToast(toastProps);
    setTimeout(() => {
      setToast(undefined);
      onFinish && onFinish();
    }, duration || 1000);
  };

  return { showToast };
};

export default useToast;
