import { style } from '@vanilla-extract/css';
import { COLORS } from '@/src/styles/colors';

export const container = style({
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#27282C'
});

export const contentWrap = style({
  width: 1140
});

export const top = style({
  display: 'flex',
  alignItems: 'center',
  marginBottom: 10
});

export const topButton = style({
  display: 'flex',
  alignItems: 'center',
  gap: 6,
  marginRight: 16
});

export const content = style({
  display: 'flex',
  alignItems: 'center',
  gap: 24
});

export const videoScreen = style({
  width: 376,
  height: 600,
  backgroundColor: COLORS.GRAY_90,
  borderRadius: 8,
  position: 'relative',
  overflow: 'hidden'
});

export const currentInfo = style({
  position: 'absolute',
  top: 32,
  left: 40
});

export const currentInfoTitle = style({
  margin: '8px 0 16px'
});

export const remoteVideoStyle = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover'
});

export const localVideoStyle = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover'
});

export const therapistVideoScreen = style({
  width: 120,
  height: 180,
  borderRadius: 4,
  backgroundColor: COLORS.GRAY_70,
  position: 'absolute',
  bottom: 8,
  right: 8,
  overflow: 'hidden'
});

export const bottom = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginTop: 24
});

export const bottomRightButtons = style({
  display: 'flex',
  alignItems: 'center',
  gap: 12
});

export const bottomIconButton = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 48,
  height: 48,
  borderRadius: 24,
  backgroundColor: COLORS.GRAY_90
});

export const callEndButton = style({
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  padding: '13px 24px',
  borderRadius: 50,
  backgroundColor: COLORS.RED_60
});
