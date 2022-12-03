import { RouteObject } from 'react-router-dom';
import { DribbbleLogo, FramerLogo, TwitterLogo } from 'phosphor-react';
import { Text } from '../styled.components';
import globalStyles from '../../theme/global_.module.css';
import Logo from '../Logo';
import { FooterRoot } from './footer.style';
import dictionary from '../../configurations/dictionary';
import { NavigationLinks } from '../../configurations/settings';
import Navigation from '../Navigation';
import { Socialmedia } from '../../types/common';
import IconLink from '../IconLink';

const { navigation, footer } = dictionary;

const navigationItems: RouteObject[] = [
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
  },
  {
    element: footer.contact,
    path: NavigationLinks.Contact
  },
  {
    element: footer.handbook,
    path: NavigationLinks.Handbook
  },
  {
    element: footer.designSystem,
    path: NavigationLinks.DesignSystem
  },
  {
    element: footer.timeline,
    path: NavigationLinks.Timeline
  }
];

const socialmedia: Socialmedia[] = [
  {
    link: '/',
    alt: 'Twitter',
    Icon: TwitterLogo
  },
  {
    link: '/',
    alt: 'Framer',
    Icon: FramerLogo
  },
  {
    link: '/',
    alt: 'Dribbble',
    Icon: DribbbleLogo
  }
];

const Footer = (): JSX.Element => (
  <FooterRoot className="footer">
    <div className={`${globalStyles.wrapper} footer__wrapper`}>
      <Logo className="footer__logo" />
      <Navigation
        className="footer__navigation"
        navigationItems={navigationItems}
      />
      <div className="footer__information">
        <Text
          variant="body-small"
          className="footer__copyrights"
        >
          { footer.copyrights }
        </Text>
        <div className="footer__socialmedia">
          {
            socialmedia.map((item) => (
              <IconLink
                key={item.alt}
                className={item.alt}
                link={item.link}
                alt={item.alt}
                Icon={item.Icon}
              />
            ))
          }
        </div>
      </div>
    </div>
  </FooterRoot>
);

export default Footer;
