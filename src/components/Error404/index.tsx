import globalStyles from '../../theme/global_.module.css';
import { Headline, Text, Button } from '../styled.components';
import { Error404Root } from './error404.style';
import dictionary from '../../configurations/dictionary';

const { error, button } = dictionary;

const Error404 = () => (
  <Error404Root className="error404">
    <div className={`${globalStyles.wrapper} error404__wrapper`}>
      <Headline
        className="error404__h1"
        variant="h1"
      >
        { error.h1 }
      </Headline>
      <Headline
        className="error404__h2"
        variant="h3"
        as="h2"
      >
        { error.h2 }
      </Headline>
      <Text
        variant="caption-large"
        className="error404__description"
      >
        { error.description }
      </Text>
      <Button
        className="error404__button"
        variant="secondary"
        to="/"
      >
        { button.goBackHome }
      </Button>
    </div>
  </Error404Root>
);

export default Error404;
