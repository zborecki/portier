import { Block } from 'payload/types';

import { statsCard } from '../components/stats-card';

export const factsBlock: Block = {
  fields: [
    {
      name: 'title',
      type: 'textarea',
      required: true,
    },
    {
      name: 'statsCards',
      type: 'array',
      label: 'Stats Cards',
      minRows: 1,
      maxRows: 2,
      interfaceName: 'StatsCard',
      labels: {
        singular: 'stats card',
        plural: 'stats cards',
      },
      fields: [...statsCard],
    },
  ],
  interfaceName: 'FactsBlock',
  labels: {
    singular: 'Fact',
    plural: 'Facts',
  },
  slug: 'facts',
};
