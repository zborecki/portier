import { RouteObject } from 'react-router-dom';
import phrases from '../../configurations/phrases';
import { NavigationLinks } from '../../configurations/settings';
import Logo from '../Logo';
import Navigation from '../Navigation';
import { Button } from '../styled.components';
import { HeaderRoot } from './header.style';
import styles from './header_.module.css';
import globalStyles from '../../theme/global_.module.css';

const { navigation, button } = phrases;
const navigationItems: RouteObject[] = [
  {
    element: navigation.home,
    path: NavigationLinks.Home
  },
  {
    element: navigation.portfolio,
    path: NavigationLinks.Portfolio
  },
  {
    element: navigation.aboutMe,
    path: NavigationLinks.AboutMe
  },
  {
    element: navigation.blog,
    path: NavigationLinks.Blog
  }
];

const Header = (): JSX.Element => (
  <HeaderRoot className="header">
    <div className={`${globalStyles.wrapper} ${styles.wrapper}`}>
      <Logo className="header__logo" />
      <div className={styles.interaction}>
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
          { button.getTemplate }
        </Button>
      </div>
    </div>
  </HeaderRoot>
);

export default Header;
