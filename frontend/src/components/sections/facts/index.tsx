import type { FunctionComponent } from 'react';

import { Cards } from '#components/sections/facts/cards';
import type { FactsService } from '#types/services';
import '#styles/facts.scss';

const Facts: FunctionComponent<FactsService> = ({ statsCards, title }) => (
  <section className="facts">
    <div className="facts__wrapper">
      <h2 className="facts__title">{ title }</h2>
      <Cards cards={statsCards} />
    </div>
  </section>
);

export { Facts };
