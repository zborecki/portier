import globalStyles from '../../theme/global_.module.css';
import { ScrollProps } from '../../types/props';
import { Headline, Text } from '../styled.components';
import { ScrollRoot } from './scroll.style';

const Scroll = ({
  className, headline, description, shortDescription
}: ScrollProps): JSX.Element => (
  <ScrollRoot className={className}>
    <div className={`${globalStyles.wrapper} ${className}__wrapper`}>
      <Headline
        className={`${className}__headline`}
        variant="h3"
        as="h2"
      >
        { headline }
      </Headline>
      <Text
        variant="caption-large"
        className={`${className}__description`}
      >
        { description }
      </Text>
      <Text
        variant="caption-large"
        className={`${className}__shortDescription`}
      >
        { shortDescription }
      </Text>
    </div>
  </ScrollRoot>
);

export default Scroll;
