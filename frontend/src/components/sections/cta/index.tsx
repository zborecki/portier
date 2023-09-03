import type { FunctionComponent } from 'react';

import { Interactive } from './interactive';

import type { CTAService } from '#types/services';
import '#styles/cta.scss';

const CTA: FunctionComponent<CTAService> = ({
  button,
  description,
  title,
}) => (
  <section className="cta">
    <div className="cta__wrapper">
      <Interactive button={button} description={description} />
      <h2 className="cta__title">{ title }</h2>
    </div>
  </section>
);

export { CTA };
