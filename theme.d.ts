import 'styled-components';
import {
  CommonThemeType, IFontTheme, BaseStatesType, ButtonThemeType
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
      header: CommonThemeType & {
        navigation: BaseStatesType
      }
    }
    font: IFontTheme
  }
}
