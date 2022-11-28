export type BaseStatesType = {
  [state in 'default' | 'active']: string;
};

export type CommonThemeType = {
  background: string;
};

type ExtendedTypographyType = {
  [property in 'lineHeight' | 'letterSpacing']?: string;
};

export interface IFontTheme {
  button: {
    secondary: TypographyType
  }
}

export type TypographyType = {
  fontSize: string;
  fontWeight?: number;
} & ExtendedTypographyType;
