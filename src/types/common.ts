import { IconProps } from 'phosphor-react';

export type BaseTypographyType = {
  color: string;
};

export type BaseStatesType = {
  [state in 'default' | 'active']: string;
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

export type ButtonThemeType = {
  [variant in 'secondary' | 'primary']: {
    background: BaseStatesType;
  }
};

export type CardThemeType = {
  headline: BaseTypographyType;
} & {
  [state in 'wrapper' | 'description']: BaseStatesType
} & {
  shape: {
    [shape in 'background' | 'icon']: BaseStatesType
  }
};

export type CardType = {
  Icon: PhosphorIconType
} & {
  [text in 'title' | 'description']: string
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

export type PhosphorIconType = (
  React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>
);

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
