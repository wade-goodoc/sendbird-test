import { style } from '@vanilla-extract/css';
import { COLORS } from '@/src/styles/colors';

export const notice = style({
  margin: '8px 0 16px 0'
});

export const nameContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  border: `1px solid ${COLORS.GRAY_30}`,
  borderRadius: '12px',
  padding: '20px'
});

export const timeContainer = style({
  display: 'flex',
  alignItems: 'center'
});

export const inputContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '24px'
});
