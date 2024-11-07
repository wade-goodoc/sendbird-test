import { COLORS } from '@/src/styles/colors';
import { recipe } from '@vanilla-extract/recipes';

export const button = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none',
    width: 'fit-content',
    whiteSpace: 'nowrap',
    cursor: 'pointer',

    ':disabled': {
      cursor: 'not-allowed'
    }
  },
  variants: {
    fullWidth: {
      true: {
        width: '100%'
      }
    },
    size: {
      large: {
        minWidth: 96,
        height: 52,
        padding: '0px 24p',
        fontSize: 16,
        lineHeight: '24px',
        borderRadius: 6,
        fontWeight: 600
      },
      medium: {
        minWidth: 88,
        height: 48,
        padding: '0px 24px',
        fontSize: 16,
        lineHeight: '24px',
        borderRadius: 6,
        fontWeight: 600
      },
      small: {
        minWidth: 64,
        height: 40,
        padding: '0px 20px',
        fontSize: 14,
        lineHeight: '21px',
        borderRadius: '6px',
        fontWeight: 600
      },
      xSmall: {
        minWidth: 56,
        height: 32,
        padding: '0px 16px',
        fontSize: 13,
        lineHeight: '19.5px',
        borderRadius: 4,
        fontWeight: 500
      }
    }
  }
});

export const disabledStyle = recipe({
  variants: {
    styleType: {
      primarySolid: {
        color: COLORS.ALPHA_GRAY_40,
        backgroundColor: COLORS.ALPHA_GRAY_05
      },
      primarySmooth: {
        color: COLORS.ALPHA_GRAY_40,
        backgroundColor: COLORS.ALPHA_GRAY_05
      },
      primaryOutline: {
        color: COLORS.ALPHA_GRAY_40,
        backgroundColor: COLORS.TRANSPARENT,
        border: `1px solid ${COLORS.ALPHA_GRAY_10}`
      },
      primaryGhost: {
        color: COLORS.ALPHA_GRAY_40,
        backgroundColor: COLORS.TRANSPARENT
      },
      primaryLinkText: {
        minWidth: 'auto',
        height: 'auto',
        padding: 0,
        fontWeight: 500,
        color: COLORS.ALPHA_GRAY_40,
        backgroundColor: COLORS.TRANSPARENT
      },
      primaryReverseSolid: {
        color: COLORS.ALPHA_WHITE_20,
        backgroundColor: COLORS.ALPHA_WHITE_05
      },
      primaryReverseSmooth: {
        color: COLORS.ALPHA_WHITE_20,
        backgroundColor: COLORS.ALPHA_WHITE_05
      },
      primaryReverseOutline: {
        color: COLORS.ALPHA_WHITE_20,
        backgroundColor: COLORS.ALPHA_WHITE_10,
        border: `1px solid ${COLORS.ALPHA_WHITE_20}`
      },
      primaryReverseGhost: {
        color: COLORS.ALPHA_WHITE_20,
        backgroundColor: COLORS.TRANSPARENT
      },
      primaryReverseLinkText: {
        minWidth: 'auto',
        height: 'auto',
        padding: 0,
        fontWeight: 500,
        color: COLORS.ALPHA_WHITE_20,
        backgroundColor: COLORS.TRANSPARENT
      },

      secondarySolid: {
        color: COLORS.ALPHA_GRAY_40,
        backgroundColor: COLORS.ALPHA_GRAY_05
      },
      secondarySmooth: {
        color: COLORS.ALPHA_GRAY_40,
        backgroundColor: COLORS.ALPHA_GRAY_05
      },
      secondaryOutline: {
        color: COLORS.ALPHA_GRAY_40,
        backgroundColor: COLORS.TRANSPARENT,
        border: `1px solid ${COLORS.ALPHA_GRAY_10}`
      },
      secondaryGhost: {
        color: COLORS.ALPHA_GRAY_40,
        backgroundColor: COLORS.TRANSPARENT
      },
      secondaryLinkText: {
        minWidth: 'auto',
        height: 'auto',
        padding: 0,
        fontWeight: 500,
        color: COLORS.ALPHA_GRAY_40,
        backgroundColor: COLORS.TRANSPARENT
      },

      dangerSolid: {
        color: COLORS.ALPHA_GRAY_40,
        backgroundColor: COLORS.ALPHA_GRAY_05
      },
      dangerSmooth: {
        color: COLORS.ALPHA_GRAY_40,
        backgroundColor: COLORS.ALPHA_GRAY_05
      },
      dangerOutline: {
        color: COLORS.ALPHA_GRAY_40,
        backgroundColor: COLORS.TRANSPARENT,
        border: `1px solid ${COLORS.ALPHA_GRAY_10}`
      },
      dangerGhost: {
        color: COLORS.ALPHA_GRAY_40,
        backgroundColor: COLORS.TRANSPARENT
      },
      dangerLinkText: {
        minWidth: 'auto',
        height: 'auto',
        padding: 0,
        fontWeight: 500,
        color: COLORS.ALPHA_GRAY_40,
        backgroundColor: COLORS.TRANSPARENT
      },

      commonSolid: {
        color: COLORS.ALPHA_GRAY_40,
        backgroundColor: COLORS.ALPHA_GRAY_05
      },
      commonSmooth: {
        color: COLORS.ALPHA_GRAY_40,
        backgroundColor: COLORS.ALPHA_GRAY_05
      },
      commonOutline: {
        color: COLORS.ALPHA_GRAY_40,
        backgroundColor: COLORS.TRANSPARENT,
        border: `1px solid ${COLORS.ALPHA_GRAY_10}`
      },
      commonGhost: {
        color: COLORS.ALPHA_GRAY_40,
        backgroundColor: COLORS.TRANSPARENT
      },
      commonLinkText: {
        minWidth: 'auto',
        height: 'auto',
        padding: 0,
        fontWeight: 500,
        color: COLORS.ALPHA_GRAY_40,
        backgroundColor: COLORS.TRANSPARENT
      }
    }
  }
});

export const styleType = recipe({
  variants: {
    styleType: {
      primarySolid: {
        color: COLORS.WHITE,
        backgroundColor: COLORS.BLUE_60,

        ':hover': {
          backgroundColor: COLORS.BLUE_70
        },

        ':active': {
          backgroundColor: COLORS.BLUE_80
        }
      },
      primarySmooth: {
        color: COLORS.BLUE_60,
        backgroundColor: COLORS.ALPHA_BLUE_10,

        ':hover': {
          backgroundColor: COLORS.ALPHA_BLUE_15
        },

        ':active': {
          backgroundColor: COLORS.ALPHA_BLUE_20
        }
      },
      primaryOutline: {
        color: COLORS.BLUE_60,
        backgroundColor: COLORS.TRANSPARENT,
        border: `1px solid ${COLORS.ALPHA_BLUE_20}`,

        ':hover': {
          backgroundColor: COLORS.ALPHA_BLUE_05
        },

        ':active': {
          backgroundColor: COLORS.ALPHA_BLUE_10
        }
      },
      primaryGhost: {
        color: COLORS.BLUE_60,
        backgroundColor: COLORS.TRANSPARENT,

        ':hover': {
          backgroundColor: COLORS.ALPHA_BLUE_05
        },

        ':active': {
          backgroundColor: COLORS.ALPHA_BLUE_10
        }
      },
      primaryLinkText: {
        minWidth: 'auto',
        height: 'auto',
        padding: 0,
        fontWeight: 500,
        color: COLORS.BLUE_60,
        backgroundColor: COLORS.TRANSPARENT,

        ':hover': {
          backgroundColor: COLORS.BLUE_70
        },

        ':active': {
          backgroundColor: COLORS.BLUE_80
        }
      },
      primaryReverseSolid: {
        color: COLORS.BLUE_60,
        backgroundColor: COLORS.WHITE,

        ':hover': {
          backgroundColor: COLORS.ALPHA_WHITE_95
        },

        ':active': {
          backgroundColor: COLORS.ALPHA_WHITE_85
        }
      },
      primaryReverseSmooth: {
        color: COLORS.WHITE,
        backgroundColor: COLORS.ALPHA_WHITE_10,

        ':hover': {
          backgroundColor: COLORS.ALPHA_WHITE_15
        },

        ':active': {
          backgroundColor: COLORS.ALPHA_WHITE_20
        }
      },
      primaryReverseOutline: {
        color: COLORS.WHITE,
        backgroundColor: COLORS.TRANSPARENT,
        border: `1px solid ${COLORS.ALPHA_WHITE_20}`,

        ':hover': {
          backgroundColor: COLORS.ALPHA_WHITE_05
        },

        ':active': {
          backgroundColor: COLORS.ALPHA_WHITE_10
        }
      },
      primaryReverseGhost: {
        color: COLORS.WHITE,
        backgroundColor: COLORS.TRANSPARENT,

        ':hover': {
          backgroundColor: COLORS.ALPHA_WHITE_05
        },

        ':active': {
          backgroundColor: COLORS.ALPHA_WHITE_10
        }
      },
      primaryReverseLinkText: {
        minWidth: 'auto',
        height: 'auto',
        padding: 0,
        fontWeight: 500,
        color: COLORS.WHITE,
        backgroundColor: COLORS.TRANSPARENT,

        '&:hover': {
          color: COLORS.ALPHA_WHITE_95
        },

        '&:active': {
          color: COLORS.ALPHA_WHITE_80
        }
      },

      secondarySolid: {
        color: COLORS.WHITE,
        backgroundColor: COLORS.GRAY_90,

        ':hover': {
          backgroundColor: COLORS.GRAY_100
        },

        ':active': {
          backgroundColor: COLORS.GRAY_100
        }
      },
      secondarySmooth: {
        color: COLORS.GRAY_70,
        backgroundColor: COLORS.ALPHA_GRAY_10,

        ':hover': {
          backgroundColor: COLORS.ALPHA_GRAY_15
        },

        ':active': {
          backgroundColor: COLORS.ALPHA_GRAY_20
        }
      },
      secondaryOutline: {
        color: COLORS.GRAY_70,
        backgroundColor: COLORS.TRANSPARENT,
        border: `1px solid ${COLORS.ALPHA_GRAY_20}`
      },
      secondaryGhost: {
        color: COLORS.GRAY_70,
        backgroundColor: COLORS.TRANSPARENT,

        ':hover': {
          backgroundColor: COLORS.ALPHA_GRAY_05
        },

        ':active': {
          backgroundColor: COLORS.ALPHA_GRAY_10
        }
      },
      secondaryLinkText: {
        minWidth: 'auto',
        height: 'auto',
        padding: 0,
        fontWeight: 500,
        color: COLORS.GRAY_60,
        backgroundColor: COLORS.TRANSPARENT,

        ':hover': {
          backgroundColor: COLORS.GRAY_70
        },

        ':active': {
          backgroundColor: COLORS.GRAY_80
        }
      },

      dangerSolid: {
        color: COLORS.WHITE,
        backgroundColor: COLORS.RED_60,

        ':hover': {
          backgroundColor: COLORS.RED_70
        },

        ':active': {
          backgroundColor: COLORS.RED_80
        }
      },
      dangerSmooth: {
        color: COLORS.RED_60,
        backgroundColor: COLORS.ALPHA_RED_10,

        ':hover': {
          backgroundColor: COLORS.ALPHA_RED_15
        },

        ':active': {
          backgroundColor: COLORS.ALPHA_RED_20
        }
      },
      dangerOutline: {
        color: COLORS.RED_60,
        backgroundColor: COLORS.TRANSPARENT,
        border: `1px solid ${COLORS.ALPHA_RED_20}`,

        ':hover': {
          backgroundColor: COLORS.ALPHA_RED_05
        },

        ':active': {
          backgroundColor: COLORS.ALPHA_RED_10
        }
      },
      dangerGhost: {
        color: COLORS.RED_60,
        backgroundColor: COLORS.TRANSPARENT,

        ':hover': {
          backgroundColor: COLORS.ALPHA_RED_05
        },

        ':active': {
          backgroundColor: COLORS.ALPHA_RED_10
        }
      },
      dangerLinkText: {
        minWidth: 'auto',
        height: 'auto',
        padding: 0,
        fontWeight: 500,
        color: COLORS.RED_60,
        backgroundColor: COLORS.TRANSPARENT,

        ':hover': {
          color: COLORS.RED_70
        },

        ':active': {
          color: COLORS.RED_80
        }
      },

      commonSolid: {},
      commonSmooth: {},
      commonOutline: {},
      commonGhost: {},
      commonLinkText: {}
    }
  }
});
