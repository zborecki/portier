import type { Block, Page } from '#types/common';

export interface BlockService {
  blockType: Block;
}

export type ButtonService = {
  [key in 'label' | 'url']: string;
};

export interface CTAService extends BlockService, DetailsService {
  button: ButtonService;
}

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

export interface ImageService {
  alt: string;
  height: number;
  url: string;
  width: number;
}

export type DetailsService = {
  [key in 'description' | 'title']: string;
};

export interface PageService {
  page: Page;
}

export interface PagesService {
  docs: DocumentService[];
}

export interface SocialMediaService extends ButtonService {
  icon: ImageService;
}
