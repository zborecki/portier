import phrases from '../../configurations/dictionary';
import { HeroRoot } from './hero.style';
import { highlightText } from '../../utils';
import globalStyles from '../../theme/global_.module.css';
import styles from './hero_.module.css';
import { Button, Headline, Text } from '../styled.components';
import { RangeType } from '../../types/common';
import { heroCards } from '../../configurations/cards';
import Cards from '../Cards';

const { hero, button } = phrases;
const headlineRange: RangeType = {
  lower: 1,
  upper: 1
};

const Hero = (): JSX.Element => (
  <HeroRoot className="hero">
    <div className={`${globalStyles.wrapper} hero__wrapper`}>
      <div className={`${styles.information} hero__information`}>
        <Headline
          className="hero__headline"
          variant="h1"
          dot
        >
          { highlightText(hero.headline, headlineRange) }
        </Headline>
        <Text
          variant="body-large"
          className={`${globalStyles.newLine} ${styles.description} hero__description`}
        >
          { hero.description }
        </Text>
        <Button
          className="hero__button"
          to="/"
        >
          { button.hireMe }
        </Button>
      </div>
      <Cards
        sectionName="hero"
        data={heroCards}
      />
    </div>
  </HeroRoot>
);

export default Hero;
