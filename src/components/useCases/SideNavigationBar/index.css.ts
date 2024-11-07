import { style } from '@vanilla-extract/css';
import { COLORS } from '@/src/styles/colors';

export const navContainer = style({
  position: 'fixed',
  top: 0,
  marginTop: '72px',
  width: '200px',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
  padding: '32px 24px 24px 24px',
  backgroundColor: COLORS.GRAY_20,
  borderRight: `1px solid ${COLORS.GRAY_20}`
});

export const navItem = style({
  display: 'flex',
  alignItems: 'center',
  padding: '12px 16px',
  gap: '8px',
  cursor: 'pointer',
  borderRadius: '6px'
});
