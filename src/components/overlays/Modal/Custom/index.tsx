import * as style from './index.css';
import { CustomModalProps } from './type';
import { Portal } from '@/src/app/portal';
import Text from '../../../typographies/Text';
import CloseIcon from '@/src/assets/icons/ic_close.svg';
import ArrowIcon from '@/src/assets/icons/ic_arrow.svg';
import { useEffect } from 'react';
import { COLORS } from '@/src/styles/colors';
const Custom = ({
  isVisible,
  children,
  type = 'bottomSheet',
  size = 'default',
  closeType = 'close',
  title,
  isPartialDim = true,
  isBackgroundCanBeClosed = false,
  closeModalHandler = () => null
}: CustomModalProps) => {
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isVisible]);
  return (
    isVisible && (
      <Portal.Consumer>
        <div className={style.wrapper}>
          {isPartialDim && <div className={style.backgroundWrapper} />}
          <div
            className={style.contentWrapper({ type })}
            onClick={(e) => {
              if (isBackgroundCanBeClosed && !!closeModalHandler) closeModalHandler();
              e.stopPropagation();
            }}
          >
            <div
              className={`
                ${style.animation({ isVisible })} ${style.contentSize({ size })} ${style.contentContainer({ type })}
              `}
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <div className={style.modalHeader}>
                {closeType === 'back' ? (
                  <>
                    <div className={style.backHeader}>
                      <div
                        className={style.backButton}
                        onClick={() => {
                          if (closeModalHandler) closeModalHandler();
                        }}
                      >
                        <ArrowIcon />
                      </div>
                      <div>{title && <Text type="heading4_700">{title}</Text>}</div>
                    </div>
                    <div
                      className={`${style.pcVisible} ${style.closeButton}`}
                      onClick={() => {
                        if (closeModalHandler) closeModalHandler();
                      }}
                    >
                      <CloseIcon width={24} height={24} color={COLORS.GRAY_50} />
                    </div>
                  </>
                ) : (
                  <>
                    <div>{title && <Text type="heading4_700">{title}</Text>}</div>
                    <div
                      className={style.closeButton}
                      onClick={() => {
                        if (closeModalHandler) closeModalHandler();
                      }}
                    >
                      <CloseIcon width={24} height={24} color={COLORS.GRAY_50} />
                    </div>
                  </>
                )}
              </div>
              <div className={style.modalBody}>{children}</div>
            </div>
          </div>
        </div>
      </Portal.Consumer>
    )
  );
};

export default Custom;
