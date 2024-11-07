import { style, globalStyle } from '@vanilla-extract/css';
import { COLORS } from '@/src/styles/colors';

export const wrapper = style({
  display: 'flex',
  flexDirection: 'row',
  gap: '8px',
  alignItems: 'center'
});

export const checkbox = style({
  display: 'none'
});

export const label = style({
  position: 'relative',
  boxSizing: 'border-box',
  display: 'flex',
  flex: '0 0 18px',
  width: '18px',
  height: '18px',
  verticalAlign: 'middle',
  appearance: 'none',
  cursor: 'pointer'
});

globalStyle(`${checkbox}:checked + ${label}`, {
  backfaceVisibility: 'hidden',
  animation: 'checked 200ms ease 1'
});

globalStyle(`${checkbox}:disabled + ${label}`, {
  cursor: 'not-allowed'
});

globalStyle(`${checkbox}:checked + ${label}::after`, {
  position: 'absolute',
  top: '5px',
  left: '4px',
  width: '8px',
  height: '3px',
  content: "''",
  border: `2px solid ${COLORS.WHITE}`,
  borderTop: 'none',
  borderRight: 'none',
  transform: 'rotate(-45deg)'
});

globalStyle(`${checkbox} + ${label}::before`, {
  position: 'absolute',
  top: 0,
  left: 0,
  boxSizing: 'border-box',
  width: '18px',
  height: '18px',
  content: '" "',
  borderColor: COLORS.GRAY_40,
  borderStyle: 'solid',
  borderWidth: '1px',
  borderRadius: '4px'
});

globalStyle(`${checkbox}:hover + ${label}::before`, {
  borderColor: COLORS.GRAY_50
});

globalStyle(`${checkbox}:active + ${label}::before`, {
  backgroundColor: COLORS.GRAY_20,
  borderColor: COLORS.GRAY_50
});

globalStyle(`${checkbox}:disabled + ${label}::before`, {
  backgroundColor: COLORS.GRAY_10,
  borderColor: COLORS.GRAY_20
});

globalStyle(`${checkbox}:checked + ${label}::before`, {
  backgroundColor: COLORS.BLUE_60,
  border: 'none'
});

globalStyle(`${checkbox}:checked:hover + ${label}::before`, {
  backgroundColor: COLORS.BLUE_70
});

globalStyle(`${checkbox}:checked:active + ${label}::before`, {
  backgroundColor: COLORS.BLUE_80
});

globalStyle(`${checkbox}:checked:disabled + ${label}::before`, {
  backgroundColor: COLORS.GRAY_30
});

export const childrenContainer = style({
  display: 'flex',
  flexGrow: 1,
  flexShrink: 1,
  fontSize: '16px',
  fontWeight: 500,
  lineHeight: 1.5,
  color: COLORS.GRAY_90
});
