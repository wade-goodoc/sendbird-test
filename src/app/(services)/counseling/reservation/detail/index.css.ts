import { style } from '@vanilla-extract/css';
import { COLORS } from '@/src/styles/colors';

export const container = style({});

export const title = style({
  display: 'flex',
  alignItems: 'center',
  marginLeft: 12
});

export const titleDot = style({
  width: 4,
  height: 4,
  backgroundColor: COLORS.GRAY_40,
  borderRadius: 2,
  margin: '0 8px'
});

export const confirmContainer = style({
  marginBottom: 40
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

export const bottomSection = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
});

export const textarea = style({
  height: 160
});

export const counselingNumber = style({
  display: 'inline-flex',
  gap: 8,
  alignItems: 'center'
});