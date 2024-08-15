import type { FC } from 'react';
import type { TransitionProps } from './types';

import { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import './styles/index.scss';

const Transition: FC<TransitionProps> = (props) => {
  const { children, animation, ...restProps } = props;
  const nodeRef = useRef<HTMLElement | null>(null);

  return (
    <CSSTransition
      nodeRef={nodeRef}
      unmountOnExit
      appear={false}
      addEndListener={(done) => {
        // istanbul ignore else
        if (nodeRef.current) {
          nodeRef.current.addEventListener('transitionend', done, false);
        }
      }}
      classNames={animation}
      {...restProps}
    >
      {
        <div ref={nodeRef as React.MutableRefObject<HTMLDivElement | null>} className="transition-wrapper">
          {children}
        </div>
      }
    </CSSTransition>
  );
};

export default Transition;
