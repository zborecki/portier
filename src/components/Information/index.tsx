import globalStyles from '../../theme/global_.module.css';
import { InformationProps } from '../../types/props';
import Image from '../Image';
import { Headline, Text } from '../styled.components';
import { InformationRoot } from './information.style';
import styles from './information_.module.css';

const Information = ({
  className,
  alt,
  data: {
    headline, description
  },
  src
}: InformationProps): JSX.Element => (
  <InformationRoot className={className}>
    <div className={`${globalStyles.wrapper} ${styles.wrapper}`}>
      <div className="information__interaction">
        <Headline
          className="information__headline"
          variant="h3"
          as="h2"
        >
          { headline }
        </Headline>
        <Text
          variant="caption-large"
          className="information__description"
        >
          { description }
        </Text>
      </div>
      <Image
        className="information__image"
        alt={alt}
        src={src}
        width={600}
      />
    </div>
  </InformationRoot>
);

export default Information;
