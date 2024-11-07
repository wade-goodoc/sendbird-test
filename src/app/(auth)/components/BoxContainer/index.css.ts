import { style } from '@vanilla-extract/css';
import { COLORS } from '@/src/styles/colors';

export const container = style({
  padding: 56,
  border: `1px solid ${COLORS.ALPHA_GRAY_15}`,
  borderRadius: 16
});
