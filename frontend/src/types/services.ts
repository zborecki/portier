import type { BaseImage, Block, Page } from '#types/common';

export interface BlockService {
  blockType: Block;
}

export type ButtonService = {
  [key in 'label' | 'url']: string;
};

export type CTAService = BlockService & DetailsService & InteractiveDetailsService;

export type DetailsService = {
  [key in 'description' | 'title']: string;
};

export interface DocumentService extends Page {
  layout: CTAService[];
}

export interface FooterService {
  copyright: string;
  socialMedia: SocialMediaService[];
}

export interface HeaderService {
  button: ButtonService;
  logo: ImageService;
  navigationItems: PageService[];
}

export interface ImageService extends BaseImage {
  height: number;
  width: number;
}

export interface InformationService extends BlockService, DetailsService {
  image: ImageService;
  reverse?: boolean;
}

export interface InteractiveDetailsService {
  button: ButtonService;
  description: string;
}

export interface PageService {
  page: Page;
}

export interface PagesService {
  docs: DocumentService[];
}

export interface SocialMediaService extends ButtonService {
  icon: ImageService;
}
