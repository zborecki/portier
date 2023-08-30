export type ButtonService = {
  [key in 'label' | 'url']: string;
};

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

export interface PageService {
  page: {
    [page in 'pageTitle' | 'slug']: string;
  }
}

export interface SocialMediaService extends ButtonService {
  icon: ImageService;
}
