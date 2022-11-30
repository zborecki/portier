import 'styled-components';
import {
  CommonThemeType,
  IFontTheme,
  BaseStatesType,
  ButtonThemeType,
  LogoThemeType,
  TypographyType,
  BaseTypographyType
} from './src/types/common';

declare module 'styled-components' {
  export interface DefaultTheme {
    common: {
      borderRadius: number;
      section: CommonThemeType;
    },
    components: {
      button: ButtonThemeType & {
        common: BaseTypographyType & {
          padding: string;
        }
      },
      logo: LogoThemeType & {
        font: TypographyType
      },
      header: CommonThemeType & {
        navigation: BaseStatesType
      },
      headline: BaseTypographyType & {
        fontWeight: number;
        dot: BaseTypographyType
      }
      highlightText: BaseTypographyType
    }
    font: IFontTheme
  }
}
