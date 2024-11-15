import { atom } from 'recoil';

export interface modalProps {
  isVisible: boolean;
  title?: string;
  message?: string;
}
export const modalData = atom<modalProps>({
  key: 'modalData',
  default: {
    isVisible: false
  }
});
