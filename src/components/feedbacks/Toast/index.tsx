import * as React from 'react';
import * as styles from './index.css';
import Text from '../../typographies/Text';
import { ToastType } from './type';
import InfoIcon from '@/src/assets/icons/ic_toast_info.svg';
import NegativeIcon from '@/src/assets/icons/ic_toast_negative.svg';
import PositiveIcon from '@/src/assets/icons/ic_toast_positive.svg';
import { COLORS } from '@/src/styles/colors';
import { Portal } from '@/src/app/portal';
import { useRecoilValue } from 'recoil';
import { toastData } from '@/src/store/toast';

export type ToastProps = {
  label: string;
  type?: ToastType;
};

const Toast = () => {
  const toast = useRecoilValue(toastData);

  if (!toast) {
    return null;
  }

  const { type, label } = toast;

  // 아이콘 추가 후 주석 제거
  const renderToastIcon = () => {
    switch (type) {
      case 'information':
        return (
          <InfoIcon
            width={24}
            height={24}
            color={COLORS.WHITE}
            alt="굿닥 비대면진료 알림"
          />
        );
      case 'success':
        return (
          <PositiveIcon
            width={24}
            height={24}
            color={COLORS.WHITE}
            alt="굿닥 비대면진료 알림"
          />
        );
      case 'error':
      case 'warning':
        return (
          <NegativeIcon
            width={24}
            height={24}
            color={COLORS.WHITE}
            alt="굿닥 비대면진료 알림"
          />
        );
      default:
        return null;
    }
  };

  return (
    <Portal.Consumer>
      <div className={styles.overlay}>
        <div className={styles.container({ isVisible: !!toast, type })}>
          {renderToastIcon()}
          <Text type="body1_400" color={'WHITE'} className={styles.label}>
            {label}
          </Text>
        </div>
      </div>
    </Portal.Consumer>
  );
};

export default Toast;
