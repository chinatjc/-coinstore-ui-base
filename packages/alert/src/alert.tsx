import type { AlertProps } from './types';
import type { FC } from 'react';

import classNames from 'classnames';
import { useCallback, useState } from 'react';
import Transition from '@coinstore-ui/transition';
import Icon from '@coinstore-ui/icon';
import './styles/index.scss';

export const Alert: FC<AlertProps> = ({ title, description, type = 'default', closable = true, onClose }) => {
  const [show, setShow] = useState(true);

  const handleClose = useCallback(() => {
    // istanbul ignore else
    if (onClose) onClose();
    setShow(false);
  }, [onClose]);

  return (
    <Transition in={show} animation="zoom-in-top">
      <div className={classNames('alert', { [`alert-${String(type)}`]: type })}>
        <span className={classNames('alert-title', { 'bold-title': description })}>{title}</span>

        {description && <p className="alert-desc">{description}</p>}

        {closable && (
          <button className={classNames('standard-button', 'alert-close')} aria-label="close" onClick={handleClose}>
            <Icon icon="xmark" />
          </button>
        )}
      </div>
    </Transition>
  );
};

export default Alert;
