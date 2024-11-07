import * as React from 'react';

export interface ModalProps {
  isVisible: boolean;
  title?: string;
  children: React.ReactNode;
  isPartialDim?: boolean; // true -> 부분 dim으로 sidebar, GNB가 보임, default: false
  isBackgroundCanBeClosed?: boolean; // true -> dim 부분을 눌렀을 때 창이 닫히는 옵션, default: false
  closeModalHandler?: () => void; // 모달 창 닫고 싶은 경우
}
