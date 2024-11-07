import { style } from '@vanilla-extract/css';
import { COLORS } from '@/src/styles/colors';

export const container = style({
  width: '100%',
  borderTop: `1px solid ${COLORS.GRAY_20}`,
  padding: '40px 64px 80px 64px'
});
export const content = style({
  display: 'flex',
  justifyContent: 'flex-start',
  gap: '80px'
});

export const footerContainer = style({
  display: 'flex',
  marginTop: '16px'
});

export const footerTab = style({
  display: 'flex'
});

export const footerText = style({
  cursor: 'pointer',
  borderRight: `1px solid ${COLORS.GRAY_30}`,
  marginRight: '8px',
  paddingRight: '8px',
  selectors: {
    '&:nth-last-child(1)': {
      cursor: 'initial',
      borderRight: 'none',
      marginRight: '0',
      paddingRight: '0'
    }
  }
});

export const information = style({
  borderRight: `1px solid ${COLORS.GRAY_30}`,
  marginRight: '8px',
  paddingRight: '8px',
  selectors: {
    '&:nth-last-child(1)': {
      borderRight: 'none',
      marginRight: '0',
      paddingRight: '0'
    }
  }
});
export const title = style({
  marginBottom: '4px',
  display: 'flex',
  gap: '4px'
});
export const guide = style({
  cursor: 'pointer'
});
