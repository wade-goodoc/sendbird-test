import { style } from '@vanilla-extract/css';

export const container = style({
  padding: '40px 64px'
});

export const pageInner = style({
  width: 960
});

export const pageHeader = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: 24
});

export const leftContent = style({
  display: 'flex',
  alignItems: 'center'
});

export const rightContent = style({
  display: 'flex',
  alignItems: 'center'
});
