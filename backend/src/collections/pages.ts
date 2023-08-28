import type { CollectionConfig, Field } from 'payload/types';

import { IntroductionBlock } from '../blocks/introduction-block';

const adminPanel: Field[] = [
  {
    label: 'Page Title',
    name: 'pageTitle',
    type: 'text',
    required: true,
    admin: {
      position: 'sidebar',
    },
  },
  {
    name: 'slug',
    type: 'text',
    unique: true,
    admin: {
      position: 'sidebar',
    },
  },
];

export const pages: CollectionConfig = {
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'pageTitle',
    defaultColumns: ['pageTitle', 'slug'],
  },
  fields: [
    ...adminPanel,
    {
      name: 'layout',
      type: 'blocks',
      blocks: [
        IntroductionBlock,
      ],
    },
  ],
  slug: 'pages',
  versions: {
    drafts: true,
  },
};
