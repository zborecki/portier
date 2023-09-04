import type { FunctionComponent } from 'react';

import type { StatsCard } from '#types/services';

type Props = {
  cards: StatsCard[];
};

const Cards: FunctionComponent<Props> = ({ cards }) => (
  <ul className="facts__list">
    {
      cards.map(({ description, value }) => (
        <li>
          <h3 className="facts__value">{ value }</h3>
          <p>{ description }</p>
        </li>
      ))
    }
  </ul>
);

export { Cards };
