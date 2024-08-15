import { useCallback, useMemo, useState, type FC } from 'react';
import type { TabsProps, TabItemKey } from './types';

import classNames from 'classnames';
import './styles/index.scss';

export const Tabs: FC<TabsProps> = ({ defaultTabKey, className, type = 'line', items, onSelect }) => {
  const [curTabKey, setCurTabKey] = useState<string | null>(() => {
    if (defaultTabKey && items.find(({ key }) => defaultTabKey === key)) return defaultTabKey;
    return items[0]?.key ?? null;
  });

  const curTabContent = useMemo(() => items.find(({ key }) => key === curTabKey)?.children, [items, curTabKey]);

  const handleClick = useCallback(
    (key: TabItemKey) => {
      setCurTabKey(key);
      // istanbul ignore else
      if (onSelect) onSelect(key);
    },
    [onSelect],
  );

  return (
    !!items.length && (
      <div className={classNames('tabs', className)}>
        <ul role="tablist" className={classNames('tabs-nav', `nav-${type}`)}>
          {items.map(({ key, label, disabled }) => (
            <li
              key={key}
              role="tab"
              aria-selected={curTabKey === key}
              className={classNames('tabs-nav-item', {
                'is-active': curTabKey === key,
                disabled,
              })}
              onClick={() => {
                if (!disabled) handleClick(key);
              }}
            >
              {label}
            </li>
          ))}
        </ul>

        <div className="tabs-content">{curTabContent}</div>
      </div>
    )
  );
};

export default Tabs;
