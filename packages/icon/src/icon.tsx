import type { FC } from 'react';
import type { IconProps } from './types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';

import './styles/index.scss';

library.add(fas);

export const Icon: FC<IconProps> = ({ className, theme = 'dark', ...restProps }) => {
  const classes = classNames(
    'icon',
    {
      [`icon-${theme}`]: true,
    },
    className,
  );

  return <FontAwesomeIcon className={classes} {...restProps} />;
};

export default Icon;
