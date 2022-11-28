import { RouteObject } from 'react-router-dom';

export interface BaseProps {
  className: string;
}

export interface NavigationProps extends BaseProps {
  navigationItems: RouteObject[];
}
