import { style } from '@vanilla-extract/css';
import { COLORS } from '@/src/styles/colors';

export const profileContainer = style({
  display: 'flex',
  flexDirection: 'row',
  gap: '16px',
  padding: '16px 20px'
});

export const menuContainer = style({
  position: 'absolute',
  top: '52px',
  backgroundColor: 'white',
  right: '0',
  zIndex: 3,
  borderRadius: '8px',
  boxShadow: `0px 2px 1px 0px ${COLORS.ALPHA_BLACK_05}, 0px 2px 8px 0px ${COLORS.ALPHA_BLACK_10}`
});

export const profile = style({
  width: '54px',
  height: '54px',
  borderRadius: '99px'
});

export const listContainer = style({
  padding: '8px 20px',
  width: '280px',
  borderTop: `1px solid ${COLORS.GRAY_20}`
});

export const listItem = style({
  padding: '10px 0',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  cursor: 'pointer'
});
