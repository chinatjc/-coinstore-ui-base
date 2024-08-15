import type { FC } from 'react';
import type { LinkProps } from './types';

import classNames from 'classnames';
import './styles/index.scss';

export const Link: FC<LinkProps> = ({ className, children, disabled, href }) => {
  return (
    <a className={classNames('link', { disabled }, className)} href={disabled ? undefined : href}>
      {children}
    </a>
  );
};

export default Link;
