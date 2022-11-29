import { NavLink } from 'react-router-dom';
import { NavigationProps } from '../../types/props';
import { NavigationList } from './navigation.style';

const Navigation = ({ className, navigationItems }: NavigationProps): JSX.Element => (
  <nav className={className}>
    <NavigationList className="navigation__list">
      {
        navigationItems.map(({ element, path }) => (
          <li
            className="navigation__item"
            key={element as string}
          >
            <NavLink
              className="navigation__link"
              end
              to={path as string}
            >
              { element }
            </NavLink>
          </li>
        ))
      }
    </NavigationList>
  </nav>
);

export default Navigation;
