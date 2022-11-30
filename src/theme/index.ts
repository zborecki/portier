import { DefaultTheme } from 'styled-components';

enum FontWeight {
  'Regular' = 400,
  'SemiBold' = 600,
  'Bold' = 700
}

const { primary, secondary, neutrals } = {
  primary: {
    aquamarine: '#57EFB4'
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
      background: neutrals.darkGunmetal
    }
  },
  components: {
    button: {
      common: {
        color: neutrals.white,
        padding: '14px 24px'
      },
      secondary: {
        background: {
          default: neutrals.darkGunmetal,
          active: secondary.royalOrange
        }
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
      secondary: {
        fontSize: '14px',
        fontWeight: FontWeight.Bold,
        lineHeight: '20px'
      }
    },
    headline: {
      h1: {
        fontSize: '72px',
        lineHeight: '86px',
        letterSpacing: '-0.02em'
      }
    }
  }
} as DefaultTheme;
