import { CardsProps } from '../../types/props';
import Card from '../Card';

const Cards = ({ sectionName, data }: CardsProps): JSX.Element => (
  <div className={`${sectionName}__cards`}>
    {
      data.map((card) => (
        <Card
          key={card.title}
          data={card}
          className={`${sectionName}__card`}
        />
      ))
    }
  </div>
);

export default Cards;
