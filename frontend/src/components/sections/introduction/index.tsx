import type { FunctionComponent } from 'react';

import { Cards } from '#components/sections/introduction/cards';
import { Content } from '#components/sections/introduction/content';
import type { IntroductionService } from '#types/services';

import '#styles/introduction.scss';

const Introduction: FunctionComponent<IntroductionService> = ({
  button,
  description,
  heroCards,
  title,
}) => (
  <section className="introduction">
    <div className="introduction__wrapper">
      <Content description={description} title={title} button={button} />
      <Cards cards={heroCards} />
    </div>
  </section>
);

export { Introduction };
