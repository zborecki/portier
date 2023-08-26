import { Field } from 'payload/types';

import { REGEX } from '../constants/patterns';
import { validate } from '../constants/validation';

export const button: Field = {
  fields: [
    {
      name: 'label',
      type: 'text',
      required: true,
    },
    {
      label: 'Link',
      name: 'url',
      type: 'text',
      required: true,
      validate: (text) => validate(text, REGEX.URL, 'The URL is invalid.'),
    },
  ],
  name: 'button',
  type: 'group',
};
