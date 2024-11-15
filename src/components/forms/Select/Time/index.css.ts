import { style } from '@vanilla-extract/css';
import { COLORS } from '@/src/styles/colors';
import { recipe } from '@vanilla-extract/recipes';

export const wrapper = recipe({
  base: {
    position: 'relative',
    width: '116px',
    display: 'flex',
    padding: '12px 16px',
    borderRadius: '8px'
  },
  variants: {
    disabled: {
      true: {
        backgroundColor: COLORS.GRAY_10,
        border: `1px solid ${COLORS.GRAY_30}`
      },
      false: {
        backgroundColor: 'white',
        border: `1px solid ${COLORS.GRAY_40}`
      }
    }
  }
});

export const optionsWrapper = style({
  position: 'absolute',
  top: '50px',
  left: 0,
  zIndex: 2,
  display: 'flex',
  width: '100%',
  cursor: 'pointer',
  borderRadius: '8px',
  backgroundColor: 'white',
  boxShadow: '0 2px 8px rgb(17 23 35 / 15%)'
});

export const optionWrapper = style({
  width: '50%',
  height: '148px',
  overflow: 'scroll',
  selectors: {
    ['&::-webkit-scrollbar']: {
      display: 'none'
    }
  }
});

export const option = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '36px',
  padding: '0 16px'
});

export const selectedOption = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '36px',
  padding: '0 16px',
  backgroundColor: COLORS.GRAY_20
});
