export type ButtonService = {
  [key in 'label' | 'url']: string;
};

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
