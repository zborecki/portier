import type { CollectionConfig, Field } from 'payload/types';

import { IntroductionBlock } from '../blocks/introduction-block';
import { REGEX } from '../constants/patterns';
import { validate } from '../constants/validation';

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
    required: true,
    unique: true,
    admin: {
      position: 'sidebar',
    },
    validate: (text) => validate(text, REGEX.INTERNAL_ROUTE, 'The slug is invalid.'),
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
      minRows: 1,
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
