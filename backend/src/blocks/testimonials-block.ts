import { Block } from 'payload/types';

import { testimonialCard } from '../components/testimonial-card';

export const testimonialsBlock: Block = {
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'note',
      type: 'text',
      required: true,
    },
    {
      name: 'testimonials',
      type: 'array',
      label: 'Testimonials',
      minRows: 1,
      interfaceName: 'TestimonialCards',
      labels: {
        singular: 'testimonial',
        plural: 'testimonials',
      },
      fields: [...testimonialCard],
    },
  ],
  interfaceName: 'TestimonialsBlock',
  slug: 'testimonials',
};
