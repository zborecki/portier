import 'styled-components';
import { CommonThemeType, IFontTheme, BaseStatesType } from './src/types/common';

declare module 'styled-components' {
  export interface DefaultTheme {
    components: {
      header: CommonThemeType & {
        navigation: BaseStatesType
      }
    }
    font: IFontTheme
  }
}
