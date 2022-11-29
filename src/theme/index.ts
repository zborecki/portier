import { DefaultTheme } from 'styled-components';

enum FontWeight {
  'Regular' = 400,
  'SemiBold' = 600,
  'Bold' = 700
}

const colors = {
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
    borderRadius: 8
  },
  components: {
    button: {
      common: {
        color: colors.neutrals.white,
        padding: '14px 24px'
      },
      secondary: {
        background: {
          default: colors.neutrals.darkGunmetal,
          active: colors.secondary.royalOrange
        }
      }
    },
    header: {
      background: colors.neutrals.chineseBlack,
      navigation: {
        active: colors.neutrals.white,
        default: colors.neutrals.philippineGray
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
    }
  }
} as DefaultTheme;
