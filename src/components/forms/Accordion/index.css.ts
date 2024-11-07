import { style, styleVariants } from '@vanilla-extract/css';
import { COLORS } from '@/src/styles/colors';

export const accordionContainer = style({
  width: '100%',
  maxWidth: '400px'
});

export const accordionItem = style({
  padding: '8px 8px',
  cursor: 'pointer',
  transition: 'background-color 0.3s',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
});

export const accordionTitleWrap = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%'
});

export const accordionTitle = style({
  display: 'flex',
  alignItems: 'center',
  gap: 8
});

export const arrowIcon = style({
  transition: 'transform 0.3s'
});

export const contentWrapper = style({
  overflow: 'hidden',
  maxHeight: 0,
  transition: 'max-height 0.3s ease',
  padding: '0 15px',
  textAlign: 'left',
  borderRadius: 6
});

export const contentExpanded = style({
  maxHeight: '200px',
  backgroundColor: COLORS.GRAY_15,
  padding: 20
});

export const arrowVariants = styleVariants({
  expanded: {
    transform: 'rotate(180deg)'
  },
  collapsed: {
    transform: 'rotate(0deg)'
  }
});
