import { atom } from 'recoil';
import { ToastProps } from '../../components/feedbacks/Toast';

export const toastData = atom<ToastProps | undefined>({
  key: 'toastData',
  default: undefined
});
