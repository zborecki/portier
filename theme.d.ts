import 'styled-components';
import {
  CommonThemeType,
  IFontTheme,
  BaseStatesType,
  ButtonThemeType,
  LogoThemeType,
  TypographyType,
  BaseTypographyType,
  CardThemeType,
  TestimonialCardThemeType
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
      card: CardThemeType,
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
      highlightText: BaseTypographyType,
      testimonialCard: TestimonialCardThemeType
    }
    font: IFontTheme
  }
}
