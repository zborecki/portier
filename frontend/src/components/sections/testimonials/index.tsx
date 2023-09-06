import type { FunctionComponent } from 'react';

import { Cards } from '#components/sections/testimonials/cards';
import { Content } from '#components/sections/testimonials/content';
import type { TestimonialsService } from '#types/services';

import '#styles/testimonials.scss';

const Testimonials: FunctionComponent<TestimonialsService> = ({
  description,
  note,
  testimonials,
  title,
}) => (
  <section className="testimonials">
    <div className="testimonials__wrapper">
      <Content title={title} note={note} description={description} />
      <Cards testimonials={testimonials} />
    </div>
  </section>
);

export { Testimonials };
