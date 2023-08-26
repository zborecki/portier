import { CollectionConfig } from 'payload/types';

const mimeTypes: string[] = [
  'image/jpg',
  'image/png',
  'image/svg+xml',
  'image/webp',
];

export const media: CollectionConfig = {
  access: {
    read: (): boolean => true,
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
    },
  ],
  slug: 'media',
  upload: {
    staticDir: '../media',
    staticURL: '/media',
    mimeTypes,
  },
};
