export type Block = 'cta';

export type Page = {
  [key in 'pageTitle' | 'slug']: string;
};
