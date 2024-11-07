import { FC, ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import { Placement, Position } from './types';
import { COLORS } from '@/src/styles/colors';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import * as styles from './index.css';

export interface TooltipProps {
  backgroundColor?: string;
  placement: Placement;
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
  hasShadow?: boolean;
  hasArrow?: boolean;
  className?: string;
  customPosition?: Position;
  contentComponent: ReactNode;
  children: ReactNode;
}

const Tooltip: FC<TooltipProps> = (props) => {
  const {
    className,
    placement,
    isVisible,
    setIsVisible,
    hasArrow = true,
    hasShadow = false,
    backgroundColor = COLORS.WHITE,
    customPosition,
    contentComponent,
    children
  } = props;
  const GAP_FROM_PARENT_TO_TOOLTIP = 4;
  const ARROW_MARGIN = hasArrow ? 10 : 0;
  const tooltipParentRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<Position>();

  /**
   * TooltipLegacy 위치 계산하는 함수
   * 부모 위치 + placement에 따라 부모 width/height, tooltip width/height 로 tooltip 위치 계산
   */
  const createTooltipTopPosition = useCallback(
    (parentHeight: number) => {
      const tooltipHeight = tooltipRef.current?.offsetHeight || 0;
      switch (placement) {
        case 'top':
        case 'topStart':
        case 'topEnd':
          setPosition((previous) => ({
            ...previous,
            top: 0 - tooltipHeight - GAP_FROM_PARENT_TO_TOOLTIP
          }));
          break;
        case 'bottom':
        case 'bottomStart':
        case 'bottomEnd':
          setPosition((previous) => ({
            ...previous,
            top: parentHeight + GAP_FROM_PARENT_TO_TOOLTIP
          }));
          break;
        case 'left':
        case 'right':
          setPosition((previous) => ({
            ...previous,
            top: parentHeight - tooltipHeight / 2 + parentHeight / 2
          }));
          break;
        case 'leftStart':
        case 'rightStart':
          setPosition((previous) => ({ ...previous, top: parentHeight - ARROW_MARGIN }));
          break;
        case 'leftEnd':
        case 'rightEnd':
          setPosition((previous) => ({
            ...previous,
            top: parentHeight - tooltipHeight + parentHeight + ARROW_MARGIN
          }));
          break;
      }
    },
    [ARROW_MARGIN, placement]
  );

  const createTooltipLeftPosition = useCallback(
    (parentWidth: number) => {
      const tooltipWidth = tooltipRef.current?.offsetWidth || 0;
      switch (placement) {
        case 'top':
        case 'bottom':
          setPosition((previous) => ({
            ...previous,
            left: 0 - tooltipWidth / 2 + parentWidth / 2
          }));
          break;
        case 'topStart':
        case 'bottomStart':
          setPosition((previous) => ({ ...previous, left: ARROW_MARGIN }));
          break;
        case 'topEnd':
        case 'bottomEnd':
          setPosition((previous) => ({
            ...previous,
            left: tooltipWidth + parentWidth + ARROW_MARGIN
          }));
          break;
        case 'left':
        case 'leftStart':
        case 'leftEnd':
          setPosition((previous) => ({
            ...previous,
            left: 0 - tooltipWidth - GAP_FROM_PARENT_TO_TOOLTIP
          }));
          break;
        case 'right':
        case 'rightStart':
        case 'rightEnd':
          setPosition((previous) => ({
            ...previous,
            left: parentWidth + GAP_FROM_PARENT_TO_TOOLTIP
          }));
          break;
      }
    },
    [ARROW_MARGIN, placement]
  );

  const createTooltipPosition = useCallback(
    (parentElement: DOMRect) => {
      createTooltipTopPosition(parentElement.height);
      createTooltipLeftPosition(parentElement.width);
    },
    [createTooltipLeftPosition, createTooltipTopPosition]
  );
  useEffect(() => {
    if (tooltipParentRef.current) {
      const parent = tooltipParentRef.current.getBoundingClientRect();
      createTooltipPosition(parent);
    }
  }, [isVisible, tooltipParentRef, createTooltipPosition]);

  useEffect(() => {
    document.addEventListener('mousedown', (event) => {
      const { target } = event;
      if (
        tooltipParentRef &&
        tooltipParentRef.current &&
        !tooltipParentRef.current.contains(target as Node)
      ) {
        setIsVisible(false);
      }
    });
  }, []);

  return (
    <div ref={tooltipParentRef} className={`${styles.container} ${className}`}>
      <div onClick={() => setIsVisible(true)}>{children}</div>
      {isVisible && (
        <div
          ref={tooltipRef}
          className={styles.tooltipContainer}
          style={{
            top:
              customPosition !== undefined && customPosition.top
                ? customPosition.top
                : position?.top,
            left:
              customPosition !== undefined && customPosition.left
                ? customPosition.left
                : position?.left
          }}
        >
          <div
            className={`${styles.contentContainer({ placement })} ${styles.arrow({ placement })}`}
            style={assignInlineVars({
              [styles.dynamicColor]: backgroundColor
            })}
          >
            <div className={styles.content({ hasShadow })}>{contentComponent}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Object.assign(Tooltip);
