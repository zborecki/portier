import type { FunctionComponent } from 'react';

import type { TestimonialCardService } from '#types/services';
import '#styles/partners.scss';

interface Props {
  testimonials: TestimonialCardService[];
}

const Cards: FunctionComponent<Props> = ({ testimonials }) => (
  <ul className="testimonials__partners">
    {
      testimonials.map(({
        avatar, fullName, occupation, quote,
      }) => (
        <li className="partners">
          <div className="partners__avatar">
            <img className="partners__image" src={avatar.url} alt={avatar.alt} />
          </div>
          <div className="partners__details">
            <p className="partners__quote">{ quote }</p>
            <h3 className="partners__fullName">{ fullName }</h3>
            <p className="partners__occupation">{ occupation }</p>
          </div>
        </li>
      ))
    }
  </ul>
);

export { Cards };
