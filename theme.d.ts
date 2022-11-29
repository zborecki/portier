import 'styled-components';
import {
  CommonThemeType, IFontTheme, BaseStatesType, ButtonThemeType, LogoThemeType, TypographyType
} from './src/types/common';

declare module 'styled-components' {
  export interface DefaultTheme {
    common: {
      borderRadius: number;
    },
    components: {
      button: ButtonThemeType & {
        common: {
          padding: string;
          color: string;
        }
      },
      logo: LogoThemeType & {
        font: TypographyType
      },
      header: CommonThemeType & {
        navigation: BaseStatesType
      }
    }
    font: IFontTheme
  }
}
