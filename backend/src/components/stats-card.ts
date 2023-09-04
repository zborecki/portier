import { Field } from 'payload/types';

export const statsCard: Field[] = [
  {
    name: 'value',
    type: 'number',
    required: true,
  },
  {
    name: 'description',
    type: 'textarea',
    required: true,
  },
];
