import { RouteObject } from 'react-router-dom';

export interface BaseProps {
  className: string;
}

export interface ButtonProps extends BaseProps {
  variant?: 'secondary';
  size?: 'small';
}

export interface LogoProps extends BaseProps {
  variant?: 'primary' | 'secondary';
}

export interface NavigationProps extends BaseProps {
  navigationItems: RouteObject[];
}
