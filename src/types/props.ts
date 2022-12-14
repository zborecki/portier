import { RouteObject } from 'react-router-dom';
import {
  CardType, ExtendedInformationType, ImageTypographyType, InformationType
} from './common';

export interface BaseProps {
  className: string;
}

export interface ButtonProps extends BaseProps {
  variant?: 'secondary' | 'primary';
  size?: 'small' | 'standard';
}

export interface CardProps extends BaseProps {
  data: CardType;
}

export interface CardsProps {
  sectionName: string;
  data: CardType[];
}

export interface FactsProps {
  headline: string;
  data: InformationType[];
}

export interface HeadlineProps extends BaseProps {
  variant: 'h1' | 'h3' | 'h4';
  dot?: boolean;
}

export interface ImageProps extends BaseProps, ImageTypographyType {
  width: number;
}

export interface InformationProps extends ImageTypographyType, BaseProps {
  data: InformationType,
  reverse?: boolean;
}

export interface LogoProps extends BaseProps {
  variant?: 'primary' | 'secondary';
}

export interface NavigationProps extends BaseProps {
  navigationItems: RouteObject[];
}

export interface ScrollProps extends BaseProps, ExtendedInformationType {
  children: JSX.Element[];
}

export interface TextProps extends BaseProps {
  variant: 'body-large' | 'body-small' | 'caption-large' | 'caption-small';
  bold?: boolean;
}
