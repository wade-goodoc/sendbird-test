import { COLORS } from '@/src/styles/colors';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const container = style({
  width: 440,
  padding: '40px 24px 24px',
  textAlign: 'center'
});

export const modalTitle = style({
  marginBottom: 16
});

export const allAgreeButton = recipe({
  base: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    padding: '14px 8px',
    borderRadius: 6,
    border: `1px solid ${COLORS.ALPHA_GRAY_30}`,
    marginBottom: 16
  },
  variants: {
    active: {
      true: {
        border: `1px solid ${COLORS.ALPHA_GRAY_80}`
      }
    }
  }
});

export const accordion = style({
  marginBottom: 40
});
