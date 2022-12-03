import { Outlet } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

const Layout = (): JSX.Element => (
  <>
    <Header />
    <main
      className="main"
    >
      <Outlet />
    </main>
    <Footer />
  </>
);

export default Layout;
