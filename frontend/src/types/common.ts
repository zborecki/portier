export type Block = 'cta' | 'information';

export type Page = {
  [key in 'pageTitle' | 'slug']: string;
};
