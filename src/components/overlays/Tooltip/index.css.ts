import { recipe } from '@vanilla-extract/recipes';
import { createVar, style } from '@vanilla-extract/css';

export const dynamicColor = createVar();

export const container = style({
  position: 'relative',
  display: 'flex'
});

export const tooltipContainer = style({
  position: 'absolute'
});

export const contentContainer = recipe({
  base: {
    display: 'flex'
  },
  variants: {
    placement: {
      top: {
        alignItems: 'center',
        flexDirection: 'column-reverse'
      },
      topStart: {
        flexDirection: 'column-reverse'
      },
      topEnd: {
        alignItems: 'flex-end',
        flexDirection: 'column-reverse'
      },
      right: {
        alignItems: 'center',
        width: 'max-content'
      },
      rightStart: {
        width: 'max-content'
      },
      rightEnd: {
        width: 'max-content'
      },
      bottom: {
        alignItems: 'center',
        flexDirection: 'column'
      },
      bottomStart: {
        flexDirection: 'column'
      },
      bottomEnd: {
        alignItems: 'center',
        flexDirection: 'column'
      },
      left: {
        alignItems: 'center',
        flexDirection: 'row-reverse',
        width: 'max-content'
      },
      leftStart: {
        flexDirection: 'row-reverse',
        width: 'max-content'
      },
      leftEnd: {
        flexDirection: 'row-reverse',
        width: 'max-content'
      }
    }
  }
});

export const arrow = recipe({
  base: {
    '::before': {
      zIndex: 2,
      width: 'fit-content',
      height: 'fit-content',
      content: '',
      border: '6px solid transparent'
    }
  },
  variants: {
    placement: {
      top: {
        '::before': {
          marginBottom: -6,
          borderTopColor: dynamicColor
        }
      },
      topStart: {
        '::before': {
          marginLeft: 12,
          marginBottom: -6,
          borderTopColor: dynamicColor
        }
      },
      topEnd: {
        '::before': {
          marginRight: 12,
          marginBottom: -6,
          borderTopColor: dynamicColor
        }
      },
      right: {
        '::before': {
          marginLeft: -6,
          borderRightColor: dynamicColor
        }
      },
      rightStart: {
        '::before': {
          marginTop: 12,
          marginLeft: -6,
          borderRightColor: dynamicColor
        }
      },
      rightEnd: {
        '::before': {
          marginTop: 'auto',
          marginBottom: 12,
          marginLeft: -6,
          borderRightColor: dynamicColor
        }
      },
      bottom: {
        '::before': {
          marginTop: -6,
          borderBottomColor: dynamicColor
        }
      },
      bottomStart: {
        '::before': {
          marginTop: -6,
          marginLeft: 12,
          borderBottomColor: dynamicColor
        }
      },
      bottomEnd: {
        '::before': {
          marginTop: -6,
          marginRight: 12,
          borderBottomColor: dynamicColor
        }
      },
      left: {
        '::before': {
          marginRight: -6,
          borderLeftColor: dynamicColor
        }
      },
      leftStart: {
        '::before': {
          marginRight: -6,
          borderLeftColor: dynamicColor
        }
      },
      leftEnd: {
        '::before': {
          marginRight: -6,
          marginBottom: 12,
          borderLeftColor: dynamicColor
        }
      }
    }
  }
});

export const content = recipe({
  base: {
    width: 'max-content',
    backgroundColor: dynamicColor,
    borderRadius: 8
  },
  variants: {
    hasShadow: {
      true: {
        boxShadow: '0 2px 8px 0 rgb(22 24 29 / 10%), 0 2px 1px 0 rgb(22 24 29 / 2%)'
      }
    }
  }
});
