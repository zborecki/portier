import type { FunctionComponent, PropsWithChildren } from 'react';

import type { ButtonProps } from '#types/props';
import '#styles/button.scss';

const Button: FunctionComponent<PropsWithChildren<ButtonProps>> = ({
  children,
  className,
  isExternal = false,
  size = 'medium',
  url,
  variant = 'primary',
}) => (
  <a
    className={`button button--${size} button--${variant} ${className}`}
    href={url}
    target={isExternal ? '_blank' : '_self'}
    rel="noreferrer"
  >
    <span className="button__label">
      { children }
    </span>
  </a>
);

export { Button };
