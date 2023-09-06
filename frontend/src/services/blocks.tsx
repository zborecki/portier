/* eslint-disable react/jsx-props-no-spreading */

import { Error } from '#components/error';
import { CTA } from '#components/sections/cta';
import { Facts } from '#components/sections/facts';
import { Information } from '#components/sections/information';
import { Introduction } from '#components/sections/introduction';
import { Testimonials } from '#components/sections/testimonials';
import type { BlockProps } from '#types/props';

export const Block = ({ blockType, props }: BlockProps) => {
  switch (blockType) {
    case 'cta':
      return <CTA {...props} />;
    case 'facts':
      return <Facts {...props} />;
    case 'information':
      return <Information {...props} />;
    case 'introduction':
      return <Introduction {...props} />;
    case 'testimonials':
      return <Testimonials {...props} />;
    default:
      return <Error />;
  }
};
