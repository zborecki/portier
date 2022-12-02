import Hero from '../../components/Hero';
import Information from '../../components/Information';
import dictionary from '../../configurations/dictionary';
import productsImage from '../../assets/products.png';
import Scroll from '../../components/Scroll';

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
    />
  </>
);

export default Home;
