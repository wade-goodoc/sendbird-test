import { PropsWithChildren, ReactNode } from 'react';

import * as style from './index.css';
import Modal from '..';
import { ModalProps } from '../type';

export type WithButtonProps = Omit<ModalProps, 'children'> & {
  size: 'small' | 'medium' | 'large';
  variant?: 'basic' | 'centered';
  contentChildren?: ReactNode;
  cancelButton?: ReactNode;
  confirmButton: ReactNode;
};

const WithButton = ({
  isPartialDim,
  title,
  size,
  variant = 'centered',
  isVisible,
  contentChildren,
  cancelButton,
  confirmButton,
  closeModalHandler
}: PropsWithChildren<WithButtonProps>) => {
  return (
    <Modal
      title={title}
      isVisible={isVisible}
      isPartialDim={isPartialDim}
      closeModalHandler={closeModalHandler}
    >
      <div className={style.modalContainer({ size })}>
        <div className={style.contentContainer}>
          {!!contentChildren && <div className={style.content}>{contentChildren}</div>}
        </div>
        <div className={style.buttonContainer({ variant })}>
          {cancelButton && cancelButton}
          {confirmButton}
        </div>
      </div>
    </Modal>
  );
};

export default WithButton;
