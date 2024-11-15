import { style } from '@vanilla-extract/css';
import { COLORS } from '@/src/styles/colors';

export const top = style({
  height: 130,
  border: `1px solid ${COLORS.ALPHA_GRAY_20}`,
  borderRadius: 8,
  marginBottom: 32,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 24px'
});

export const part = style({
  display: 'flex',
  gap: 8
});

export const label = style({
  display: 'flex',
  alignItems: 'center',
  marginBottom: 6,
  gap: 6
});

// export const selectWithoutBorder = style({
//   borderColor: 'transparent !important'
// });

export const therapyName = style({
  display: 'flex',
  alignItems: 'center',
  gap: 8
});

export const counselingCount = style({
  width: 96,
  textAlign: 'right',
  marginRight: 40
});

export const counselingTotalPrice = style({
  width: 160,
  textAlign: 'right'
});
