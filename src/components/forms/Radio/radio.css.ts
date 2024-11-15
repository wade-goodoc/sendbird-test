import { style } from '@vanilla-extract/css';
import { COLORS } from '@/src/styles/colors';

export const radioButtonWrapper = style({
  display: 'flex',
  alignItems: 'center',
  padding: '8px 0'
});

export const hiddenRadio = style({
  opacity: 0,
  width: 0,
  height: 0,
  position: 'absolute',
  pointerEvents: 'none'
});

export const customRadio = style({
  width: '20px',
  height: '20px',
  border: `1px solid ${COLORS.GRAY_40}`,
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'background 0.3s',
  cursor: 'pointer'
});

export const customRadioChecked = style({
  borderColor: COLORS.BLUE_60,

  '::after': {
    content: '',
    width: '14px',
    height: '14px',
    background: COLORS.BLUE_60,
    borderRadius: '50%'
  }
});

export const label = style({
  color: '#333',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  gap: 12
});
