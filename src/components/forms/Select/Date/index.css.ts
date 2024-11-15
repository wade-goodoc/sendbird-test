import { COLORS } from '@/src/styles/colors';
import { globalStyle, style } from '@vanilla-extract/css';

export const container = style({});

globalStyle(`${container} .react-datepicker`, {
  width: '100%',
  border: 'none',
  borderRadius: '10px',
  boxShadow:
    '0px 2px 1px 0px rgba(22, 24, 29, 0.02), 0px 2px 8px 0px rgba(22, 24, 29, 0.10)'
});

globalStyle(`${container} .react-datepicker__triangle`, {
  display: 'none'
});

globalStyle(`${container} .react-datepicker-popper`, {
  zIndex: '2'
});

globalStyle(`${container} .react-datepicker__month-container`, {
  width: 'inherit'
});

globalStyle(`${container} .react-datepicker__header`, {
  backgroundColor: COLORS.WHITE
});

globalStyle(`${container} .react-datepicker__header--custom`, {
  border: 'none'
});

globalStyle(`${container} .react-datepicker__day-names`, {
  display: 'none'
});

globalStyle(`${container} .react-datepicker__day--weekend:first-of-type`, {
  color: COLORS.RED_60
});

globalStyle(`${container} .react-datepicker__day--weekend::last-of-type`, {
  color: COLORS.BLUE_60
});

globalStyle(`${container} .react-datepicker__day--disabled`, {
  color: '#ccc!important'
});

globalStyle(`${container} .react-datepicker__day`, {
  width: '24px',
  height: '24px',
  fontSize: '13px',
  lineHeight: '180%'
});
globalStyle(`${container} .react-datepicker__day--keyboard-selected`, {
  color: COLORS.GRAY_100,
  backgroundColor: COLORS.TRANSPARENT
});

globalStyle(`${container} .react-datepicker__day--today`, {});

globalStyle(`${container} .react-datepicker__day--selected`, {
  color: COLORS.GRAY_100,
  backgroundColor: `${COLORS.GRAY_30}!important`
});

globalStyle(`${container} .react-datepicker__day--outside-month`, {
  color: COLORS.GRAY_100,
  opacity: 0.3
});

globalStyle(`${container} input`, {
  outline: 'none',
  width: '232px',
  padding: '16px',
  borderRadius: '8px',
  border: `1px solid ${COLORS.GRAY_40}`,
  fontSize: '16px',
  fontWeight: 500,
  color: COLORS.GRAY_90,
  cursor: 'pointer',
  caretColor: 'transparent'
});

globalStyle(`${container} input.react-datepicker-ignore-onclickoutside`, {
  border: `1px solid ${COLORS.GRAY_90}`
});
