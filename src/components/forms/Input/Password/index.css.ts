import { style } from '@vanilla-extract/css';

export const numberInput = style({
  selectors: {
    '&::-webkit-inner-spin-button': {
      WebkitAppearance: 'none',
      margin: 0
    }
  }
});
