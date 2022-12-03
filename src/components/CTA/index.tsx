import { CTARoot } from './cta.style';
import { Button, Text, Headline } from '../styled.components';
import globalStyles from '../../theme/global_.module.css';
import dictionary from '../../configurations/dictionary';

const { cta, button } = dictionary;

const CTA = (): JSX.Element => (
  <CTARoot>
    <div className={`${globalStyles.wrapper} cta__wrapper`}>
      <div className="cta__interaction">
        <Text
          variant="caption-large"
          className="cta__description"
        >
          { cta.description }
        </Text>
        <Button
          className="cta__button"
          to="/"
        >
          { button.getInTouch }
        </Button>
      </div>
      <Headline
        className="cta__headline"
        variant="h3"
        as="h2"
      >
        { cta.headline }
      </Headline>
    </div>
  </CTARoot>
);

export default CTA;
