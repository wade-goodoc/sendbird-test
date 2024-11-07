import { COLORS } from '@/src/styles/colors';
import { style } from '@vanilla-extract/css';

export const container = style({
  width: '100%',
  display: 'flex',
  gridGap: 24,
  justifyContent: 'space-between',
  alignItems: 'center'
});

export const progressBarContainer = style({
  width: '100%',
  height: 2,
  backgroundColor: COLORS.ALPHA_BLACK_05
});

export const progressBar = style({
  height: 2,
  backgroundColor: COLORS.GRAY_80,
  transition: 'width 2s ease-out',
  transitionDuration: '0.5s'
});

export const pageNumber = style({
  width: 54,
  display: 'flex',
  justifyContent: 'flex-end',
  marginRight: 10,
  gridGap: 2
});
