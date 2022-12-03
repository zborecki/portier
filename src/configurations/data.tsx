import { BoundingBox, Layout, PencilLine } from 'phosphor-react';
import { CardType, InformationType, TestimonialCardType } from '../types/common';

import avatarImage from '../assets/avatar.png';

export const interestingFacts: InformationType[] = [
  {
    headline: '50%',
    description: 'One repays a teacher badly if one remains only a pupil.'
  },
  {
    headline: '90%',
    description: 'One repays a teacher badly if one remains only a pupil.'
  }
];

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

export const testimonialCards: TestimonialCardType[] = [
  {
    fullName: 'Adriana Lima',
    occupation: 'Cobrand - CEO',
    message: 'In fact, whenever you must learn a new skill or alter your career path later in life, you reconnect with that youthful, adventurous part of yourself.',
    avatar: avatarImage
  },
  {
    fullName: 'Emily Ratajkowski',
    occupation: 'Tinnie - CO-Founder',
    message: 'In fact, whenever you must learn a new skill or alter your career path later in life, you reconnect with that youthful, adventurous part of yourself.',
    avatar: avatarImage
  },
  {
    fullName: 'Alexandra Daddario',
    occupation: 'Airbnb - Lead Designer',
    message: 'In fact, whenever you must learn a new skill or alter your career path later in life, you reconnect with that youthful, adventurous part of yourself.',
    avatar: avatarImage
  }
];
