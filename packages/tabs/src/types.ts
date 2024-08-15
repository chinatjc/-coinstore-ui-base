import type { ReactNode } from 'react';

type TabsType = 'line' | 'card';
export type TabItemKey = string;
interface TabItemType {
  key: TabItemKey;
  label: ReactNode;
  disabled?: boolean;
  children: ReactNode;
}

export interface TabsProps {
  defaultTabKey?: TabItemKey;
  className?: string;
  type?: TabsType;
  items: TabItemType[];
  onSelect?: (selectedKey: TabItemKey) => void;
}
