import { COLORS } from '@/src/styles/colors';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const wrapper = recipe({
  base: {
    width: '100%',
    boxSizing: 'border-box',
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    height: '100%',
    padding: '12px 16px',
    backgroundColor: COLORS.WHITE,
    border: `1px solid ${COLORS.GRAY_40}`,
    borderRadius: 6,
    outline: 'none',

    ':focus-within': {
      border: `1px solid ${COLORS.GRAY_100}`
    }
  },
  variants: {
    disabled: {
      true: {
        backgroundColor: COLORS.GRAY_20,
        border: `1px solid ${COLORS.GRAY_20}`
      }
    },
    isError: {
      true: {
        backgroundColor: COLORS.WHITE,
        border: `1px solid ${COLORS.RED_60}`
      }
    }
  }
});

export const textarea = style({
  boxSizing: 'border-box',
  width: '100%',
  height: '100%',
  fontFamily: 'inherit',
  fontSize: '16px',
  fontWeight: 400,
  lineHeight: '150%',
  color: COLORS.GRAY_90,
  resize: 'none',
  border: 'none',
  outline: 'none',

  '::placeholder': {
    color: COLORS.GRAY_50
  },

  ':read-only': {
    cursor: 'default'
  }
});

export const counter = style({
  display: 'flex',
  justifyContent: 'flex-end',
  columnGap: 2,
  marginTop: 4
});
