import { style } from '@vanilla-extract/css';
import { COLORS } from '@/src/styles/colors';

export const columnName = style({
  display: 'flex',
  alignItems: 'center',
  padding: '10px 0',
  borderBottom: `1px solid ${COLORS.GRAY_30}`
});
