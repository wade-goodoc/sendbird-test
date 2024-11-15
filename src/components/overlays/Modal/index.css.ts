import { COLORS } from '@/src/styles/colors';
import { style, keyframes } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const Wrapper = style({
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: 10
});

export const backgroundWrapper = style({
  position: 'fixed',
  top: 0,
  left: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100vw',
  height: '100vh',
  backgroundColor: COLORS.DIM_LIGHT
});

export const ContentWrapper = style({
  position: 'fixed',
  top: 0,
  left: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100vw',
  height: '100vh'
});

export const slideUp = keyframes({
  from: {
    transform: 'translateY(30px)'
  },
  to: {
    transform: 'translateY(0px)'
  }
});

export const slideDown = keyframes({
  from: {
    transform: 'translateY(0px)'
  },
  to: {
    transform: 'translateY(30px)'
  }
});

export const animation = recipe({
  variants: {
    isVisible: {
      true: { animation: `${slideUp} 0.25s ease-out forwards` },
      false: { animation: `${slideDown} 0.25s ease-out forwards` }
    }
  }
});

export const ContentContainer = style({
  backgroundColor: COLORS.WHITE,
  borderRadius: 16,
  padding: '24px 0 0 0'
});

export const modalHeader = style({
  padding: '0 24px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
});

export const closeIcon = style({
  width: 40,
  height: 40,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer'
});
