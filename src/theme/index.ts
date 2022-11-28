import { DefaultTheme } from 'styled-components';

enum FontWeight {
  'Regular' = 400,
  'SemiBold' = 600,
  'Bold' = 700
}

const colors = {
  neutrals: {
    chineseBlack: '#12121C',
    philippineGray: '#88888D',
    white: '#FFFFFF'
  }
};

export default {
  components: {
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
        lineHeight: '16px'
      }
    }
  }
} as DefaultTheme;
