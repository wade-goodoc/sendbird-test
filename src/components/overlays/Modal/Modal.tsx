import * as style from './index.css';
import { ModalProps } from '@/src/components/overlays/Modal/type';
import { Portal } from '@/src/app/portal';
import Text from '@/src/components/typographies/Text/Text';
import CloseIcon from '@/src/assets/icons/ic_close.svg';
import { COLORS } from '@/src/styles/colors';

const Modal = ({
  isVisible,
  children,
  title = '',
  isPartialDim = false,
  isBackgroundCanBeClosed = false,
  closeModalHandler
}: ModalProps) => {
  return isVisible ? (
    <Portal.Consumer>
      <div className={style.Wrapper}>
        {isPartialDim && <div className={style.backgroundWrapper} />}
        <div
          className={`${style.ContentWrapper} ${style.animation({ isVisible })}`}
          onClick={(e) => {
            if (isBackgroundCanBeClosed && !!closeModalHandler) closeModalHandler();
            e.stopPropagation();
          }}
        >
          <div
            className={style.ContentContainer}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            {title && (
              <div className={style.modalHeader}>
                <Text type="heading4_700">{title}</Text>
                {!!closeModalHandler && (
                  <div className={style.closeIcon}>
                    <CloseIcon
                      width={24}
                      height={24}
                      color={COLORS.GRAY_50}
                      onClick={closeModalHandler}
                    />
                  </div>
                )}
              </div>
            )}
            {children}
          </div>
        </div>
      </div>
    </Portal.Consumer>
  ) : null;
};

export default Modal;
