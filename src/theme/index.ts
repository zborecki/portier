import { DefaultTheme } from 'styled-components';

enum FontWeight {
  'Regular' = 400,
  'SemiBold' = 600,
  'Bold' = 700
}

const { primary, secondary, neutrals } = {
  primary: {
    aquamarine: '#57EFB4',
    blue: '#006ADA'
  },
  secondary: {
    royalOrange: '#FA8F54'
  },
  neutrals: {
    chineseBlack: '#12121C',
    darkGunmetal: '#222233',
    philippineGray: '#88888D',
    white: '#FFFFFF'
  }
};

export default {
  common: {
    borderRadius: 8,
    section: {
      background: neutrals.chineseBlack
    }
  },
  components: {
    button: {
      common: {
        color: neutrals.white,
        padding: '14px 24px'
      },
      primary: {
        background: {
          default: primary.blue,
          active: primary.aquamarine
        }
      },
      secondary: {
        background: {
          default: neutrals.darkGunmetal,
          active: secondary.royalOrange
        }
      }
    },
    card: {
      shape: {
        background: {
          default: neutrals.darkGunmetal,
          active: primary.aquamarine
        },
        icon: {
          default: neutrals.white,
          active: neutrals.chineseBlack
        }
      },
      wrapper: {
        default: neutrals.chineseBlack,
        active: neutrals.darkGunmetal
      },
      description: {
        default: neutrals.philippineGray,
        active: neutrals.white
      },
      headline: {
        color: neutrals.white
      }
    },
    header: {
      background: neutrals.chineseBlack,
      navigation: {
        active: neutrals.white,
        default: neutrals.philippineGray
      }
    },
    headline: {
      color: neutrals.white,
      fontWeight: FontWeight.Bold,
      dot: {
        color: primary.aquamarine
      }
    },
    highlightText: {
      color: neutrals.philippineGray
    },
    logo: {
      font: {
        fontSize: '27px',
        fontWeight: FontWeight.Bold
      },
      primary: {
        color: neutrals.white
      },
      secondary: {
        color: secondary.royalOrange
      }
    }
  },
  font: {
    button: {
      common: {
        fontWeight: FontWeight.Bold
      },
      small: {
        fontSize: '14px',
        lineHeight: '20px'
      },
      standard: {
        fontSize: '16px',
        lineHeight: '24px'
      }
    },
    headline: {
      h1: {
        fontSize: '72px',
        lineHeight: '86px',
        letterSpacing: '-0.02em'
      },
      h3: {
        fontSize: '48px',
        lineHeight: '56px',
        letterSpacing: '-0.02em'
      }
    },
    text: {
      color: neutrals.philippineGray,
      type: {
        standard: FontWeight.Regular,
        bolder: FontWeight.SemiBold
      },
      body: {
        large: {
          fontSize: '24px',
          lineHeight: '32px',
          letterSpacing: '-0.01em'
        },
        small: {
          fontSize: '16px',
          lineHeight: '24px'
        }
      },
      caption: {
        large: {
          fontSize: '14px',
          lineHeight: '24px'
        },
        small: {
          fontSize: '12px',
          lineHeight: '20px'
        }
      }
    }
  }
} as DefaultTheme;
