import { COLORS } from '@/src/styles/colors';
import { recipe } from '@vanilla-extract/recipes';
import { style } from '@vanilla-extract/css';

export const container = recipe({
  base: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    height: 48,
    borderRadius: 6,
    padding: '12px 16px',
    border: `1px solid ${COLORS.GRAY_40}`,
    backgroundColor: COLORS.WHITE,

    selectors: {
      '&:focus-within': {
        border: `1px solid ${COLORS.GRAY_90}`
      }
    }
  },
  variants: {
    disabled: {
      true: {
        backgroundColor: COLORS.GRAY_15,
        border: `1px solid ${COLORS.GRAY_20}`
      }
    },
    readOnly: {
      true: {
        backgroundColor: COLORS.GRAY_15,
        border: `1px solid ${COLORS.GRAY_20}`
      }
    },
    isError: {
      true: {
        backgroundColor: COLORS.WHITE,
        border: `1px solid ${COLORS.RED_70}`
      }
    }
  }
});

export const input = style({
  width: 'calc(100% - 16px)',
  border: 'none',
  fontWeight: 400,
  fontSize: 16,
  lineHeight: '150%',
  color: COLORS.GRAY_90,

  selectors: {
    '&:focus': {
      outline: 'none'
    },

    '&:disabled': {
      backgroundColor: COLORS.GRAY_15,
      color: COLORS.GRAY_60
    },

    '&:read-only': {
      color: COLORS.GRAY_90,
      backgroundColor: COLORS.GRAY_15,
      pointerEvents: 'none',
      cursor: 'inherit'
    },

    '&::placeholder': {
      color: COLORS.GRAY_50
    }
  }
});
