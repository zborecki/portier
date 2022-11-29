export type BaseTypographyType = {
  color: string;
};

export type BaseStatesType = {
  [state in 'default' | 'active']: string;
};

export type ButtonThemeType = {
  [variant in 'secondary']: {
    background: BaseStatesType;
  }
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

export type LogoThemeType = {
  [variant in 'primary' | 'secondary']: BaseTypographyType
};

export type TypographyType = {
  fontSize: string;
  fontWeight?: number;
} & ExtendedTypographyType;
