import { TestimonialCardType } from '../../types/common';
import { BaseProps } from '../../types/props';
import Image from '../Image';
import { Text } from '../styled.components';
import { TestimonialCardRoot } from './testimonialCard.style';

const TestimonialCard = ({
  fullName, occupation, message, avatar, className
}: TestimonialCardType & BaseProps): JSX.Element => (
  <TestimonialCardRoot className={className}>
    <Image
      className="card__avatar"
      alt={fullName}
      src={avatar}
      width={44}
    />
    <div className="card__information">
      <Text
        variant="caption-large"
        className="card__message"
      >
        { message }
      </Text>
      <Text
        as="h2"
        className="card__fullName"
        bold
        variant="body-large"
      >
        { fullName }
      </Text>
      <Text
        className="card__occupation"
        variant="caption-small"
      >
        { occupation }
      </Text>
    </div>
  </TestimonialCardRoot>
);

export default TestimonialCard;
