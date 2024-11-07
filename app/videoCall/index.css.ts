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

export const therapyInfo = style({
  width: 740,
  height: 600,
  backgroundColor: COLORS.WHITE,
  borderRadius: 8,
  padding: '28px 24px',
  overflowY: 'auto'
});

export const therapyInfoTop = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: 16
});

export const therapyInfoTitleWrap = style({
  display: 'flex',
  alignItems: 'center'
});

export const therapyInfoTitle = style({
  display: 'flex',
  alignItems: 'center',
  marginLeft: 12
});

export const therapyInfoTitleDot = style({
  width: 4,
  height: 4,
  backgroundColor: COLORS.GRAY_40,
  borderRadius: 2,
  margin: '0 8px'
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

export const section = style({
  marginBottom: 24
});

export const sectionTitle = style({
  marginBottom: 13
});

export const sectionBox = style({
  border: `1px solid ${COLORS.GRAY_30}`,
  borderRadius: 8,
  padding: '16px 20px'
});

export const infoRow = style({
  display: 'flex',
  alignItems: 'flex-start',
  margin: '4px 0'
});

export const infoLabel = style({
  width: 96
});

export const infoValue = style({
  flex: 1
});

export const infoValueAlignCenter = style({
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  gap: 12
});

export const descriptionTitle = style({
  display: 'flex',
  alignItems: 'center',
  marginBottom: 7
});

export const rescheduleButton = style({
  display: 'flex',
  alignItems: 'center'
});

export const counselingStyle = style({
  display: 'inline-flex',
  padding: '4px 8px',
  borderRadius: 20,
  backgroundColor: COLORS.ALPHA_GREEN_10,
  alignItems: 'center',
  marginLeft: 12,
  gap: 5
});

export const textarea = style({
  height: 160
});

export const modalInner = style({
  padding: 24
});
