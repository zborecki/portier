/* eslint-disable react/jsx-props-no-spreading */

import { CTA } from '#components/sections/cta';
import { Facts } from '#components/sections/facts';
import { Information } from '#components/sections/information';
import type { BlockProps } from '#types/props';

export const Block = ({ blockType, props }: BlockProps) => {
  switch (blockType) {
    case 'cta':
      return <CTA {...props} />;
    case 'facts':
      return <Facts {...props} />;
    case 'information':
      return <Information {...props} />;
    default:
      return <p>Error</p>;
  }
};
