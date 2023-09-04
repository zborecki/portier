export type Block = 'cta' | 'information';

export type Page = {
  [key in 'pageTitle' | 'slug']: string;
};

export type BaseImage = {
  [key in 'alt' | 'url']: string;
};

export type Reverse = {
  reverse?: boolean;
};
