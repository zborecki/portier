import { RouteObject } from 'react-router-dom';

export interface BaseProps {
  className: string;
}

export interface ButtonProps extends BaseProps {
  variant?: 'secondary' | 'primary';
  size?: 'small' | 'standard';
}

export interface HeadlineProps extends BaseProps {
  variant: 'h1';
  dot?: boolean;
}

export interface LogoProps extends BaseProps {
  variant?: 'primary' | 'secondary';
}

export interface NavigationProps extends BaseProps {
  navigationItems: RouteObject[];
}

export interface TextProps extends BaseProps {
  variant: 'body-large' | 'body-small' | 'caption-large' | 'caption-small';
  bold?: boolean;
}
