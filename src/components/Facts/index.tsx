import globalStyles from '../../theme/global_.module.css';
import { FactsProps } from '../../types/props';
import { Headline, Text } from '../styled.components';
import { FactsRoot } from './facts.style';

const Facts = ({ headline, data }: FactsProps): JSX.Element => (
  <FactsRoot>
    <div className={`${globalStyles.wrapper} facts__wrapper`}>
      <Headline
        className="facts__headline"
        variant="h3"
        as="h2"
      >
        { headline }
      </Headline>
      <div className="facts__statistics">
        {
          data.map((item, index) => (
            <div
              key={`${item.headline}-${index}`}
              className="facts__card"
            >
              <Headline
                className="facts__headline"
                variant="h4"
                as="h2"
              >
                { item.headline }
              </Headline>
              <Text
                className="facts__description"
                variant="caption-large"
              >
                { item.description }
              </Text>
            </div>
          ))
        }
      </div>
    </div>
  </FactsRoot>
);

export default Facts;
