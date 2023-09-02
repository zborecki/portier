/* eslint-disable react/jsx-props-no-spreading */

import { CTA } from '#components/sections/cta';
import type { BlockProps } from '#types/props';

export const Block = ({ blockType, props }: BlockProps) => {
  switch (blockType) {
    case 'cta':
      return <CTA {...props} />;
    default:
      return <p>Error</p>;
  }
};
