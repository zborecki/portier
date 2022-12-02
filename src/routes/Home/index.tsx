import Hero from '../../components/Hero';
import Information from '../../components/Information';
import dictionary from '../../configurations/dictionary';
import productsImage from '../../assets/products.png';
import Scroll from '../../components/Scroll';
import { testimonialCards } from '../../configurations/cards';
import TestimonialCard from '../../components/TestimonialCard';

const { informationI, testimonials } = dictionary;

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
  </>
);

export default Home;
