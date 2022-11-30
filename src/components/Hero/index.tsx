import phrases from '../../configurations/phrases';
import { HeroRoot } from './hero.style';
import { highlightText } from '../../utils';
import globalStyles from '../../theme/global_.module.css';
import { Headline } from '../styled.components';
import { RangeType } from '../../types/common';

const { hero } = phrases;
const headlineRange: RangeType = {
  lower: 1,
  upper: 1
};

const Hero = (): JSX.Element => (
  <HeroRoot className="hero">
    <div className={`${globalStyles.wrapper} hero__wrapper`}>
      <Headline
        className="hero__headline"
        variant="h1"
        dot
      >
        { highlightText(hero.headline, headlineRange) }
      </Headline>
    </div>
  </HeroRoot>
);

export default Hero;
