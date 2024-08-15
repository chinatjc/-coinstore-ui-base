import type { MouseEventHandler, ReactNode } from 'react';

export type ButtonType = 'primary' | 'default' | 'danger';
export type Size = 'large' | 'middle' | 'small';

export interface ButtonProps {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  size?: Size;
  type?: ButtonType;
  onClick?: (...args: Parameters<MouseEventHandler<HTMLButtonElement>>) => void;
}
