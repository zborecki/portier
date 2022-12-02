import Hero from '../../components/Hero';
import Information from '../../components/Information';
import dictionary from '../../configurations/dictionary';
import productsImage from '../../assets/products.png';

const { informationI } = dictionary;

const Home = (): JSX.Element => (
  <>
    <Hero />
    <Information
      className="information"
      alt="Products"
      src={productsImage}
      data={informationI}
    />
  </>
);

export default Home;
