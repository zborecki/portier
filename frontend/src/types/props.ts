import type { Block } from './common';

import type { ImageService } from '#types/services';

export interface BaseLayoutProps {
  pageTitle: string;
}

export interface BlockProps {
  blockType: Block;
  props: any;
}

export interface ButtonProps extends LinkProps {
  isExternal?: boolean;
  size?: 'medium' | 'small';
  variant?: 'primary' | 'secondary';
}

export interface IconButtonProps extends LinkProps {
  icon: ImageService;
  label: string;
}

export interface LinkProps {
  url: string;
}
