import type { FunctionComponent } from 'react';

import { Button } from '#components/button';
import type { InteractiveDetailsService } from '#types/services';

const Interactive: FunctionComponent<InteractiveDetailsService> = ({
  button: { label, url },
  description,
}) => (
  <div className="cta__interactive">
    <p className="cta__description">{ description }</p>
    <Button isExternal url={url}>{ label }</Button>
  </div>
);

export { Interactive };
