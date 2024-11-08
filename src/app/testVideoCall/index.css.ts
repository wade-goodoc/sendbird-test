import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '100px 0'
});

export const content = style({});

export const videoView = style({
  display: 'flex',
  gap: 10
});

export const buttons = style({
  display: 'flex',
  gap: 10,
  marginBottom: 10
});

export const button = style({
  flex: 1
});
