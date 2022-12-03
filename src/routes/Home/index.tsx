import Hero from '../../components/Hero';
import Information from '../../components/Information';
import dictionary from '../../configurations/dictionary';
import Scroll from '../../components/Scroll';
import { testimonialCards, interestingFacts } from '../../configurations/data';
import TestimonialCard from '../../components/TestimonialCard';
import Facts from '../../components/Facts';

import productsImage from '../../assets/products.png';
import notebookImage from '../../assets/notebook.png';

const {
  informationI, informationII, testimonials, facts
} = dictionary;

const Home = (): JSX.Element => (
  <>
    <Hero />
    <Information
      className="information"
      alt="Products"
      src={productsImage}
      data={informationI}
    />
    <Scroll
      headline={testimonials.headline}
      description={testimonials.description}
      shortDescription={testimonials.shortDescription}
      className="testimonials"
    >
      {
        testimonialCards.map(({
          fullName, occupation, avatar, message
        }) => (
          <TestimonialCard
            key={occupation}
            className="testimonials__card"
            fullName={fullName}
            occupation={occupation}
            avatar={avatar}
            message={message}
          />
        ))
      }
    </Scroll>
    <Facts
      headline={facts.headline}
      data={interestingFacts}
    />
    <Information
      reverse
      className="customers"
      alt="Products"
      src={notebookImage}
      data={informationII}
    />
  </>
);

export default Home;
