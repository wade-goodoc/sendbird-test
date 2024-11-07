import { COLORS } from '@/src/styles/colors';
import { recipe } from '@vanilla-extract/recipes';
import { style } from '@vanilla-extract/css';

export const container = recipe({
  base: {
    cursor: 'pointer'
  },
  variants: {
    size: {
      medium: {
        height: 40
      },
      large: {
        height: 48
      }
    }
  }
});

export const selectButton = recipe({
  base: {
    borderColor: COLORS.GRAY_40
  },
  variants: {
    isOpen: {
      true: {
        borderColor: COLORS.GRAY_90
      }
    }
  }
});

export const selectMenu = style({
  position: 'relative',
  top: 4
});

export const iconLayout = {
  medium: 16,
  large: 20
};
