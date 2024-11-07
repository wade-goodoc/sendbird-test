import { mq } from '@/src/styles/mediaquery';
import { COLORS } from '@/src/styles/colors';
import { recipe } from '@vanilla-extract/recipes';
import { style } from '@vanilla-extract/css';

export const modalContainer = recipe({
  base: {
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '0 20px'
  },
  variants: {
    size: {
      small: {
        width: 360,

        '@media': {
          [mq.mobile]: {
            width: 'calc(100vw - 40px)',
            minWidth: 240
          }
        }
      },
      medium: {
        width: 440,

        '@media': {
          [mq.mobile]: {
            width: 'calc(100vw - 20px)',
            minWidth: 320
          }
        }
      },
      large: {
        width: 824,

        '@media': {
          [mq.mobile]: {
            width: 'calc(100vw - 24px)',
            maxHeight: 'calc(100vh - 120px)',
            overflowY: 'scroll'
          }
        }
      }
    }
  }
});

export const contentContainer = style({
  display: 'flex',
  flexDirection: 'column',
  rowGap: '8px'
});

export const header = style({
  whiteSpace: 'pre-line'
});

export const content = style({
  fontSize: 14,
  fontWeight: 500,
  lineHeight: '150%',
  color: COLORS.GRAY_70,
  whiteSpace: 'pre-line'
});

export const buttonContainer = recipe({
  base: {
    display: 'flex',
    columnGap: '8px',
    justifyContent: 'flex-end',
    padding: '20px 0'
  },
  variants: {
    variant: {
      centered: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%'
      },
      basic: {}
    }
  }
});
