import { style } from '@vanilla-extract/css';
import { COLORS } from '@/src/styles/colors';

export const title = style({
  padding: '40px 0 24px 0 '
});

export const columnName = style({
  display: 'flex',
  alignItems: 'center',
  borderBottom: `1px solid ${COLORS.GRAY_30}`
});
export const column = style({
  display: 'flex',
  alignItems: 'center'
});
