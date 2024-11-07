import { style } from '@vanilla-extract/css';
import { COLORS } from '@/src/styles/colors';

export const container = style({
  display: 'flex',
  flexDirection: 'column'
});

export const header = style({
  height: 72,
  display: 'flex',
  alignItems: 'center',
  padding: '0 24px',
  boxSizing: 'border-box',
  borderBottom: `1px solid ${COLORS.ALPHA_GRAY_20}`
});

export const content = style({
  display: 'flex',
  justifyContent: 'center'
});
