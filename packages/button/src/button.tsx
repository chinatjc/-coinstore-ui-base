import type { ButtonProps } from './types';
import type { FC } from 'react';

import classNames from 'classnames';
import './styles/index.scss';

export const Button: FC<ButtonProps> = ({
  className,
  children,
  disabled = false,
  size = 'middle',
  type = 'default',
  onClick,
}) => {
  return (
    <button
      className={classNames(
        'btn',
        {
          [`btn-${size}`]: size !== 'middle',
          [`btn-${type}`]: type !== 'default',
        },
        className,
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
