import { style } from '@vanilla-extract/css';
import { COLORS } from '@/src/styles/colors';

export const content = style({
  maxHeight: 562,
  overflow: 'auto'
});

export const section = style({
  margin: '12px 0 32px'
});

export const sectionTitle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  margin: '8px 0 16px'
});

export const counselingStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '4px 8px',
  borderRadius: 50,
  backgroundColor: 'rgba(126, 42, 235, 0.10)'
});

export const counselingStyleText = style({
  fontSize: 12,
  fontWeight: 700,
  color: '#7E2AEB',
  lineHeight: '18px'
});

export const noteFromUser = style({
  display: 'block',
  marginBottom: 16
});

export const memo = style({
  padding: 16,
  borderRadius: 8,
  backgroundColor: COLORS.GRAY_15
});
