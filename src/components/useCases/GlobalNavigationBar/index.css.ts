import { globalStyle, style } from '@vanilla-extract/css';
import { COLORS } from '@/src/styles/colors';

export const headerContainer = style({
  width: '100%',
  position: 'fixed',
  background: 'white',
  top: '0',
  zIndex: '1',
  padding: '0 24px',
  borderBottom: `1px solid ${COLORS.ALPHA_GRAY_20}`
});

export const container = style({
  height: '72px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
});

export const leftContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: '64px'
});

export const tabContainer = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
});

export const tab = style({
  margin: '0 24px',
  height: '72px',
  textAlign: 'center',
  alignContent: 'center'
});

export const selectedTab = style({
  marginTop: '2px',
  borderBottom: `2px solid ${COLORS.GRAY_70}`
});

export const rightContainer = style({
  display: 'flex',
  justifyContent: 'center',
  gap: '4px'
});

export const rightIconContainer = style({
  position: 'relative',
  width: '48px',
  height: '48px',
  backgroundColor: 'white',
  borderRadius: '99px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  ':hover': {
    backgroundColor: COLORS.GRAY_20
  },
  ':active': {
    backgroundColor: COLORS.GRAY_30
  }
});

export const message = style({
  ':active': {
    fill: COLORS.GRAY_90
  }
});

globalStyle(`${message}:active path`, {
  stroke: 'white'
});

export const messageCount = style({
  position: 'absolute',
  right: '4px',
  top: '4px',
  backgroundColor: COLORS.RED_60,
  borderRadius: '99px',
  display: 'flex',
  padding: '0 5px',
  height: '18px',
  justifyContent: 'center',
  alignItems: 'center'
});

export const sendbirdChatContainer = style({
  position: 'absolute',
  display: 'flex',
  top: '0px',
  height: '80vh',
  marginTop: '500px',
  marginLeft: '-500px'
});

export const profile = style({
  width: '32px',
  height: '32px',
  borderRadius: '99px'
});
