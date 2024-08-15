import type { ReactNode } from 'react';

export interface LinkProps {
  className?: string;
  children: ReactNode;
  disabled?: boolean;
  href?: string;
}
