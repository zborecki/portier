import { GlobalConfig } from 'payload/types';

import { socialMedia } from '../components/social-media';

const header: GlobalConfig = {
  access: {
    read: () => true,
  },
  fields: [
    {
      label: 'Copyright',
      name: 'copyright',
      type: 'text',
    },
    {
      fields: socialMedia,
      label: 'Social media',
      name: 'socialMedia',
      type: 'array',
    },
  ],
  slug: 'footer',
};

export default header;
