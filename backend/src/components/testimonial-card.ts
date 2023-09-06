import { Field } from 'payload/types';

export const testimonialCard: Field[] = [
  {
    name: 'avatar',
    type: 'upload',
    relationTo: 'media',
    required: true,
  },
  {
    name: 'fullName',
    type: 'text',
    required: true,
  },
  {
    name: 'occupation',
    type: 'text',
    required: true,
  },
  {
    name: 'quote',
    type: 'textarea',
    required: true,
  },
];
