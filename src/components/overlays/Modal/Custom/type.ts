import { ModalProps } from '@/src/components/overlays/Modal/type';

export interface CustomModalProps extends ModalProps {
  type?: ModalType;
  size?: ModalSize;
  closeType?: ModalCloseType;
  title?: string;
}

export type ModalCloseType = 'close' | 'back';
export type ModalSize = 'default' | 'wide';
export type ModalType = 'bottomSheet' | 'page';
