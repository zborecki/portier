import { Link } from 'react-router-dom';
import { Socialmedia } from '../../types/common';
import { BaseProps } from '../../types/props';
import { IconLinkRoot } from './iconLink.style';

const IconLink = ({
  alt, className, Icon, link
}: Socialmedia & BaseProps): JSX.Element => (
  <IconLinkRoot className={`iconLink ${className}`}>
    <Link
      to={link}
      className={`iconLink__link ${className}__link`}
    >
      <Icon
        className={`iconLink__icon ${className}__icon`}
        alt={alt}
        size={20}
        weight="regular"
      />
    </Link>
  </IconLinkRoot>
);

export default IconLink;
