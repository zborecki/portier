import type { BaseImage, Block, Reverse } from '#types/common';
import type { DetailsService, ImageService } from '#types/services';

export interface BaseLayoutProps {
  pageTitle: string;
}

export interface BlockProps {
  blockType: Block;
  props: any;
}

export interface ButtonProps extends LinkProps {
  additionalClassName?: string;
  className?: string;
  isExternal?: boolean;
  size?: 'medium' | 'small';
  variant?: 'primary' | 'secondary';
}

export type DetailsProps = DetailsService & Reverse;

export interface IconButtonProps extends LinkProps {
  icon: ImageService;
  label: string;
}

export type ImageProps = BaseImage & Reverse;

export interface LinkProps {
  url: string;
}
