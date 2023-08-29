export interface BaseLayoutProps {
  pageTitle: string;
}

export interface ButtonProps extends LinkProps {
  isExternal?: boolean;
  size?: 'medium' | 'small';
  variant?: 'primary' | 'secondary';
}

export interface LinkProps {
  url: string;
}
