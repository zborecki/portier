import type { FunctionComponent } from 'react';

import type { InformationService } from '#types/services';
import '#styles/information.scss';

const Information: FunctionComponent<InformationService> = ({
  description, image: { alt, url }, reverse, title,
}) => (
  <section className="information">
    <div className="information__wrapper">
      <div className={`information__details ${reverse ? 'information__details--reverse' : ''}`}>
        <h2 className="information__title">{ title }</h2>
        <p>{ description }</p>
      </div>
      <div className={`information__illustration ${reverse ? 'information__illustration--reverse' : ''}`}>
        <img src={url} alt={alt} />
      </div>
    </div>
  </section>
);

export { Information };
