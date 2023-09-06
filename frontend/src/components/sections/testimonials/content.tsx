import type { FunctionComponent } from 'react';

import type { DetailsService } from '#types/services';

interface Props extends DetailsService {
  note: string;
}

const Content: FunctionComponent<Props> = ({
  description,
  note,
  title,
}) => (
  <div className="testimonials__content">
    <div className="testimonials__header">
      <h1 className="testimonials__title">{ title }</h1>
      <p>{ description }</p>
    </div>
    <p>{ note }</p>
  </div>
);

export { Content };
