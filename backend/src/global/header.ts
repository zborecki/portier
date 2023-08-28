import { GlobalConfig } from 'payload/types';

import { button } from '../components/button';

const header: GlobalConfig = {
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      fields: [
        {
          maxDepth: 2,
          name: 'page',
          type: 'relationship',
          relationTo: 'pages',
        },
      ],
      label: 'Navigation items',
      labels: {
        plural: 'navigation items',
        singular: 'navigation item',
      },
      name: 'navigationItems',
      type: 'array',
    },
    { ...button },
  ],
  slug: 'header',
};

export default header;
