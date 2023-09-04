import type { FunctionComponent } from 'react';

import type { DetailsProps } from '#types/props';

const Details: FunctionComponent<DetailsProps> = ({ description, reverse, title }) => (
  <div className={`information__details ${reverse ? 'information__details--reverse' : ''}`}>
    <h2 className="information__title">{ title }</h2>
    <p>{ description }</p>
  </div>
);

export { Details };
