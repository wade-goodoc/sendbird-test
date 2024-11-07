import { COLORS } from '@/src/styles/colors';
import { mq } from '@/src/styles/mediaquery';
import { style, keyframes } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const wrapper = style({
  position: 'fixed',
  top: 0,
  zIndex: 10,
  left: 0
});

export const backgroundWrapper = style({
  position: 'fixed',
  top: 0,
  left: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100vw',
  height: '100vh',
  backgroundColor: COLORS.DIM_LIGHT
});

export const contentWrapper = recipe({
  base: {
    position: 'fixed',
    width: '100vw',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  variants: {
    type: {
      bottomSheet: {
        '@media': {
          [mq.mobile]: {
            bottom: 0,
            display: 'flex',
            alignItems: 'flex-end'
          }
        }
      },
      page: {}
    }
  }
});

export const contentSize = recipe({
  base: {
    backgroundColor: COLORS.WHITE,
    maxHeight: 'calc(100% - 80px)',
    borderRadius: 16
  },
  variants: {
    size: {
      default: {
        width: 420
      },
      wide: {
        width: 720
      }
    }
  }
});

export const contentContainer = recipe({
  variants: {
    type: {
      page: {
        '@media': {
          [mq.mobile]: {
            width: '100%',
            minHeight: '100%',
            borderRadius: 0
          }
        }
      },
      bottomSheet: {
        '@media': {
          [mq.mobile]: {
            width: '100%',
            borderRadius: '16px 16px 0 0'
          }
        }
      }
    }
  }
});

export const slideUp = keyframes({
  from: {
    transform: 'translateY(30px)'
  },
  to: {
    transform: 'translateY(0px)'
  }
});

export const slideDown = keyframes({
  from: {
    transform: 'translateY(0px)'
  },
  to: {
    transform: 'translateY(30px)'
  }
});

export const fadeOut = keyframes({
  from: {
    opacity: 1
  },
  to: {
    opacity: 0
  }
});

export const animation = recipe({
  variants: {
    isVisible: {
      true: { animation: `${slideUp} 0.25s ease-out forwards` },
      false: { animation: `${fadeOut} 0.25s ease-out forwards` }
    }
  }
});

export const modalHeader = style({
  padding: '24px 24px 12px 24px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
});

export const modalBody = style({
  maxHeight: 'calc(100vh - 80px - 72px - 40px)',
  overflowY: 'auto',

  '@media': {
    [mq.mobile]: {
      maxHeight: 'calc(100vh - 64px)'
    }
  }
});

export const backHeader = style({
  display: 'flex',
  alignItems: 'center',
  gridGap: 8
});

export const pcVisible = style({
  '@media': {
    [mq.mobile]: {
      display: 'none'
    }
  }
});

export const backButton = style({
  cursor: 'pointer',
  display: 'none',

  '@media': {
    [mq.mobile]: {
      display: 'block'
    }
  }
});
export const closeButton = style({
  cursor: 'pointer',
  display: 'block'
});
