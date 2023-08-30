import { atom } from 'nanostores';

import type { FooterService } from '#types/services';

export const footerStore = atom<FooterService>({
  copyright: '',
  socialMedia: [],
});
