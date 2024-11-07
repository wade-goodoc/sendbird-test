import { style } from '@vanilla-extract/css';
import { COLORS } from '@/src/styles/colors';

export const bottomContainer = style({
  marginTop: 42,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
});

export const termButtons = style({
  display: 'flex',
  alignItems: 'center',
  marginBottom: 8
});

export const textDivider = style({
  display: 'inline-block',
  width: 1,
  height: 14,
  backgroundColor: COLORS.GRAY_30,
  margin: '0 8px'
});
