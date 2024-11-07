import { style } from '@vanilla-extract/css';
import { COLORS } from '@/src/styles/colors';

export const column = style({
  display: 'flex',
  alignItems: 'center',
  borderBottom: `1px solid ${COLORS.GRAY_30}`,
  height: '72px'
});
