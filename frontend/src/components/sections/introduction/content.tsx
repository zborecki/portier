import type { FunctionComponent } from 'react';

import { Button } from '#components/button';
import { Title } from '#components/sections/introduction/title';
import type { IntroductionContentService } from '#types/services';

const Content: FunctionComponent<IntroductionContentService> = ({
  button: { label, url },
  description,
  title,
}) => (
  <div className="introduction__content">
    <Title>{title}</Title>
    <p className="introduction__description">{description}</p>
    <Button className="introduction__button" isExternal url={url}>{ label }</Button>
  </div>
);

export { Content };
