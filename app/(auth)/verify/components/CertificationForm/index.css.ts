import { style } from '@vanilla-extract/css';

export const container = style({
  width: 480,
  marginTop: 72
});

export const inputWrap = style({
  marginBottom: 24
});

export const title = style({
  marginBottom: 24
});

export const inputLabel = style({
  display: 'block',
  marginBottom: 8
});

export const residentNumber = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: 8
});

export const frontResidentNumber = style({
  selectors: {
    [`${residentNumber} &`]: {
      width: 220
    }
  }
});

export const dash = style({});

export const backResidentNumber = style({
  selectors: {
    [`${residentNumber} &`]: {
      width: 48,
      paddingRight: 0
    }
  }
});

export const backResidentNumberInput = style({
  selectors: {
    [`${residentNumber} &`]: {
      width: '100%'
    }
  }
});

export const hiddenNumbers = style({
  letterSpacing: 1.8
});

export const errorMessage = style({
  marginTop: 8
});

export const certificationNumberButton = style({
  marginTop: 8,
  display: 'flex',
  gap: 8
});
