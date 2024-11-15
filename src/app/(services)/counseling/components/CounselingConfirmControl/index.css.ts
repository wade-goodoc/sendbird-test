import { style } from '@vanilla-extract/css';
import { COLORS } from '@/src/styles/colors';

export const container = style({
  width: '100%',
  backgroundColor: COLORS.ALPHA_BLUE_10,
  border: `1px solid ${COLORS.ALPHA_BLUE_15}`,
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
