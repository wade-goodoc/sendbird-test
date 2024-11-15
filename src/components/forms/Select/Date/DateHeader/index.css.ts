import { COLORS } from '@/src/styles/colors';
import { style } from '@vanilla-extract/css';

export const container = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between'
});

export const monthContainer = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%'
});

export const iconButton = style({
  cursor: 'pointer',
  backgroundColor: COLORS.TRANSPARENT,
  border: 'none',
  selectors: {
    '&:first-child': {
      marginLeft: '11px'
    },
    '&:last-child': {
      marginRight: '11px'
    }
  }
});

export const dayOfWeekContainer = style({
  position: 'absolute',
  display: 'flex',
  width: '100%',
  backgroundColor: 'white',
  justifyContent: 'space-between',
  top: '33px'
});
