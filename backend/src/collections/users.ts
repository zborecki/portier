import { CollectionConfig } from 'payload/types';

export const users: CollectionConfig = {
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  fields: [
  ],
  slug: 'users',
};
