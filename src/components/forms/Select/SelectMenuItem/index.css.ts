import { COLORS } from '@/src/styles/colors';
import { recipe } from '@vanilla-extract/recipes';

export const container = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    cursor: 'pointer',
    fontWeight: 400,
    color: COLORS.GRAY_80
  },
  variants: {
    size: {
      medium: {
        fontSize: 13,
        padding: '10px 12px'
      },
      large: {
        fontSize: 16,
        padding: 12
      }
    },
    selected: {
      true: {
        fontWeight: 600,
        color: COLORS.GRAY_100
      }
    },
    disabled: {
      true: {
        color: COLORS.GRAY_40
      },
      false: {
        ':hover': {
          backgroundColor: COLORS.ALPHA_GRAY_05
        }
      }
    }
  }
});
