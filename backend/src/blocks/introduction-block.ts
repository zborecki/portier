import { Block } from 'payload/types';

import { button } from '../components/button';
import { heroCard } from '../components/hero-card';

export const IntroductionBlock: Block = {
  fields: [
    {
      name: 'title',
      type: 'richText',
      required: true,
      admin: {
        elements: [],
        leaves: ['bold'],
      },
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    { ...button },
    {
      name: 'heroCards',
      type: 'array',
      label: 'Hero Cards',
      minRows: 1,
      maxRows: 3,
      interfaceName: 'HeroCards',
      labels: {
        singular: 'hero card',
        plural: 'hero cards',
      },
      fields: [...heroCard],
    },
  ],
  interfaceName: 'IntroductionBlock',
  slug: 'introduction',
};
