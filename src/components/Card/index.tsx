import { CardProps } from '../../types/props';
import { Text } from '../styled.components';
import { CardRoot } from './card.style';
import styles from './card_.module.css';

const Card = ({
  className, data: { Icon, description, headline }
}: CardProps): JSX.Element => (
  <CardRoot className={className}>
    <div className={`${styles.shape} card__shape`}>
      <Icon
        className="card__icon"
        size={20}
      />
    </div>
    <Text
      as="h2"
      className="card__headline"
      bold
      variant="body-large"
    >
      { headline }
    </Text>
    <Text
      as="p"
      className="card__description"
      variant="caption-large"
    >
      { description }
    </Text>
  </CardRoot>
);

export default Card;
