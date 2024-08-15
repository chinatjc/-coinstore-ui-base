import type { ReactNode } from 'react';
import type { CSSTransitionProps } from 'react-transition-group/CSSTransition';

type AnimationName = 'zoom-in-top' | 'zoom-in-left' | 'zoom-in-bottom' | 'zoom-in-right';

export type TransitionProps = Pick<
  CSSTransitionProps<HTMLElement>,
  'in' | 'onEnter' | 'onEntering' | 'onEntered' | 'onExit' | 'onExiting' | 'onExited'
> & {
  animation: AnimationName;
  wrapper?: boolean;
  children: ReactNode;
};
