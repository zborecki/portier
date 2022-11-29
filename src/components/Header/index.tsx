import { RouteObject } from 'react-router-dom';
import { NavigationLinks } from '../../configurations/navigation';
import Navigation from '../Navigation';
import { Button, Wrapper } from '../styled.components';
import { HeaderRoot } from './header.style';

const navigationItems: RouteObject[] = [
  {
    element: 'Home',
    path: NavigationLinks.Home
  },
  {
    element: 'Portfolio',
    path: NavigationLinks.Portfolio
  },
  {
    element: 'About me',
    path: NavigationLinks.AboutMe
  },
  {
    element: 'Blog',
    path: NavigationLinks.Blog
  }
];

const Header = (): JSX.Element => (
  <HeaderRoot className="header">
    <Wrapper className="header__wrapper">
      Logo
      <div className="header__interaction">
        <Navigation
          className="header__navigation"
          navigationItems={navigationItems}
        />
        <Button
          className="header__button"
          size="small"
          to="/"
          variant="secondary"
        >
          Get template
        </Button>
      </div>
    </Wrapper>
  </HeaderRoot>
);

export default Header;
