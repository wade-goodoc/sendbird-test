import { style } from '@vanilla-extract/css';
import { COLORS } from '@/src/styles/colors';

export const container = style({
  zIndex: 1,
  display: 'flex',
  flexDirection: 'column',
  padding: 8,
  backgroundColor: COLORS.WHITE,
  borderRadius: 8,
  boxShadow:
    '0px 2px 8px 0px rgba(22, 24, 29, 0.1), 0px 2px 1px 0px rgba(22, 24, 29, 0.02)'
});
