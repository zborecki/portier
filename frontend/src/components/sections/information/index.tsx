import type { FunctionComponent } from 'react';

import { Details } from '#components/sections/information/details';
import { Image } from '#components/sections/information/image';
import type { InformationService } from '#types/services';
import '#styles/information.scss';

const Information: FunctionComponent<InformationService> = ({
  description, image: { alt, url }, reverse, title,
}) => (
  <section className="information">
    <div className="information__wrapper">
      <Details title={title} description={description} reverse={reverse} />
      <Image alt={alt} url={url} reverse={reverse} />
    </div>
  </section>
);

export { Information };
