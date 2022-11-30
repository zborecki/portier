export type BaseTypographyType = {
  color: string;
};

export type BaseStatesType = {
  [state in 'default' | 'active']: string;
};

export type ButtonThemeType = {
  [variant in 'secondary' | 'primary']: {
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

export interface IFontTheme extends BoldParagraphsType {
  headline: HeadlinesType,
  text: StandardParagraphsType & BaseTypographyType
}

export type LogoThemeType = {
  [variant in 'primary' | 'secondary']: BaseTypographyType
};

type BoldParagraphsType = {
  [type in 'button']: {
    [paragraph in 'small' | 'standard']: TypographyType
  } & {
    common: {
      fontWeight: number;
    }
  }
};

export type RangeType = {
  [type in 'lower' | 'upper']: number;
};

type StandardParagraphsType = {
  [standard in 'body' | 'caption']: {
    [size in 'small' | 'large']: TypographyType
  }
} & {
  type: {
    [type in 'standard' | 'bolder']: number
  };
};

export type TypographyType = {
  fontSize: string;
  fontWeight?: number;
} & ExtendedTypographyType;
