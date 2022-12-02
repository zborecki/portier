import globalStyles from '../../theme/global_.module.css';
import { ScrollProps } from '../../types/props';
import { Headline, Text } from '../styled.components';
import { ScrollRoot } from './scroll.style';

const Scroll = ({
  className, headline, description, shortDescription, children
}: ScrollProps): JSX.Element => (
  <ScrollRoot className={className}>
    <div className={`${globalStyles.wrapper} scroll__wrapper ${className}__wrapper`}>
      <div className={`${className}__information scroll__information`}>
        <div className={`${className}__title scroll__title`}>
          <Headline
            className={`${className}__headline scroll__headline`}
            variant="h3"
            as="h2"
          >
            { headline }
          </Headline>
          <Text
            variant="caption-large"
            className={`${className}__description scroll__description`}
          >
            { description }
          </Text>
        </div>
        <Text
          variant="caption-large"
          className={`${className}__shortDescription scroll__shortDescription`}
        >
          { shortDescription }
        </Text>
      </div>
      <div className={`${className}__cards scroll__cards`}>
        { children }
      </div>
    </div>
  </ScrollRoot>
);

export default Scroll;
