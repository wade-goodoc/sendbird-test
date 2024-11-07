import { style } from '@vanilla-extract/css';

export const container = style({
  padding: '64px 0',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
});

export const title = style({
  marginTop: '16px',
  textAlign: 'center',
  whiteSpace: 'pre'
});
