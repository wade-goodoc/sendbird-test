import { style } from '@vanilla-extract/css';
import { COLORS } from '@/src/styles/colors';

export const container = style({
  backgroundColor: COLORS.BLUE_80,
  border: `1px solid ${COLORS.BLUE_90}`,
  borderRadius: 8,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: 24
});

export const title = style({
  display: 'flex',
  alignItems: 'center',
  gap: 8
});

export const buttonWrap = style({
  display: 'flex',
  alignItems: 'center',
  gap: 12
});

export const modalContainer = style({
  width: 392,
  padding: 24
});

export const modalButtons = style({
  display: 'flex',
  justifyContent: 'flex-end',
  marginTop: 24,
  gap: 8
});
