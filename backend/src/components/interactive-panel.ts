import { Field } from 'payload/types';

import { button } from './button';

export const interactivePanel: Field[] = [
  {
    name: 'description',
    type: 'textarea',
    required: true,
  },
  { ...button },
];
