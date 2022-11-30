import { NavLink } from 'react-router-dom';
import { NavigationProps } from '../../types/props';
import styles from './navigation_.module.css';

const Navigation = ({ className, navigationItems }: NavigationProps): JSX.Element => (
  <nav className={className}>
    <ul className={`${styles.list} navigation__list`}>
      {
        navigationItems.map(({ element, path }) => (
          <li
            className="navigation__item"
            key={element as string}
          >
            <NavLink
              className={`${styles.link} navigation__link`}
              end
              to={path as string}
            >
              { element }
            </NavLink>
          </li>
        ))
      }
    </ul>
  </nav>
);

export default Navigation;
