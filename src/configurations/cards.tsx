import { BoundingBox, Layout, PencilLine } from 'phosphor-react';
import { CardType } from '../types/common';

export const heroCards: CardType[] = [
  {
    headline: 'UI/UX design',
    description: 'The time that leads to mastery is dependent on the intensity of our focus.',
    Icon: BoundingBox
  },
  {
    headline: 'Product design',
    description: 'The time that leads to mastery is dependent on the intensity of our focus.',
    Icon: Layout
  },
  {
    headline: 'Writing',
    description: 'The time that leads to mastery is dependent on the intensity of our focus.',
    Icon: PencilLine
  }
];
