import { COLORS } from '@/src/styles/colors';
import { mq } from '@/src/styles/mediaquery';
import { recipe } from '@vanilla-extract/recipes';
import { style, keyframes } from '@vanilla-extract/css';

export const overlay = style({
  width: '100%',
  height: '100vh',
  position: 'fixed',
  left: 0,
  top: 24,
  zIndex: 100,
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center'
});

export const fadeIn = keyframes({
  from: {
    opacity: 0
  },
  to: {
    opacity: 1
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

export const container = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    margin: '0 24px',
    columnGap: 10,
    padding: '12px 20px',
    borderRadius: 8,
    backgroundColor: COLORS.GRAY_80,

    boxShadow: '0 2px 1px rgba(22, 24, 29, 0.02), 0 2px 8px rgba(22, 24, 29, 0.1)',

    '@media': {
      [mq.desktop]: {
        maxWidth: 640
      },
      [mq.laptop]: {
        maxWidth: 640
      },
      [mq.tablet]: {
        maxWidth: 'calc(100% - 40px)'
      },
      [mq.mobile]: {
        maxWidth: 'calc(100% - 40px)'
      }
    }
  },

  variants: {
    isVisible: {
      true: {
        animation: `${fadeIn} 0.25s ease-out forwards`
      },
      false: {
        animation: `${fadeOut} 0.25s ease-out forwards`
      }
    }
  }
});

export const label = style({
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  WebkitLineClamp: 2
});
