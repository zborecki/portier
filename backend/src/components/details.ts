import { Field } from 'payload/types';

export const details: Field[] = [
  {
    name: 'title',
    type: 'textarea',
    required: true,
  },
  {
    name: 'description',
    type: 'textarea',
    required: true,
  },
];
