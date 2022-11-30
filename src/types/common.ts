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

type HeadlinesType = {
  [headline in 'h1']: TypographyType
};

export interface IFontTheme {
  button: {
    secondary: TypographyType
  },
  headline: HeadlinesType
}

export type LogoThemeType = {
  [variant in 'primary' | 'secondary']: BaseTypographyType
};

export type RangeType = {
  [type in 'lower' | 'upper']: number;
};

export type TypographyType = {
  fontSize: string;
  fontWeight?: number;
} & ExtendedTypographyType;
