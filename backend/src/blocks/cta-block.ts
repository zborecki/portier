import { Block } from 'payload/types';

import { interactivePanel } from '../components/interactive-panel';

export const ctaBlock: Block = {
  fields: [
    {
      name: 'title',
      type: 'textarea',
      required: true,
    },
    ...interactivePanel,
  ],
  interfaceName: 'CTABlock',
  labels: {
    plural: 'CTA',
    singular: 'CTA',
  },
  slug: 'cta',
};
