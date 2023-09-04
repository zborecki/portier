import type { FunctionComponent } from 'react';

import type { ImageProps } from '#types/props';

const Image: FunctionComponent<ImageProps> = ({ alt, reverse, url }) => (
  <div className={`information__illustration ${reverse ? 'information__illustration--reverse' : ''}`}>
    <img src={url} alt={alt} />
  </div>
);

export { Image };
