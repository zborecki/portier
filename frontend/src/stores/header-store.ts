import { atom } from 'nanostores';

import type { HeaderService } from '#types/services';

export const headerStore = atom<HeaderService>({
  button: {
    label: '',
    url: '',
  },
  logo: {
    alt: '',
    height: 0,
    url: '',
    width: 0,
  },
  navigationItems: [],
});
