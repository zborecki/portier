import type { FunctionComponent } from 'react';

import type { HeroCardService } from '#types/services';
import '#styles/cards.scss';

interface Props {
  cards: HeroCardService[];
}

const Cards: FunctionComponent<Props> = ({ cards }) => (
  <ul className="introduction__cards">
    {
      cards.map(({ description, image, title }) => (
        <li className="introduction__card">
          <div className="card__icon">
            <img className="card__image" src={image.url} alt={image.alt} />
          </div>
          <h2 className="card__title">{title}</h2>
          <p className="card__description">{description}</p>
        </li>
      ))
    }
  </ul>
);

export { Cards };
