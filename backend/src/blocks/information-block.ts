import { Block } from 'payload/types';

import { details } from '../components/details';

export const informationBlock: Block = {
  fields: [
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'reverse',
      type: 'checkbox',
      label: 'Reverse',
      defaultValue: false,
    },
    ...details,
  ],
  interfaceName: 'InformationBlock',
  labels: {
    plural: 'Information',
    singular: 'Information',
  },
  slug: 'information',
};
