import { Field } from 'payload/types';

import { REGEX } from '../constants/patterns';
import { validate } from '../constants/validation';

export const socialMedia: Field[] = [{
  label: 'Icon',
  name: 'icon',
  type: 'upload',
  relationTo: 'media',
  required: true,
},
{
  label: 'Label',
  name: 'label',
  type: 'text',
  required: true,
},
{
  label: 'URL',
  name: 'url',
  type: 'text',
  required: true,
  validate: (text) => validate(text, REGEX.URL, 'The URL is invalid.'),
}];
