import { style } from '@vanilla-extract/css';
import { COLORS } from '@/src/styles/colors';

export const title = style({
  marginBottom: 8
});

export const price = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  border: `1px solid ${COLORS.GRAY_30}`,
  borderRadius: 12,
  padding: 20,
  margin: '16px 0'
});
