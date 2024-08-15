import { fireEvent, render } from '@testing-library/react';
import Tabs from '../src';
import { randomString } from './utils';

describe('test Tabs component', () => {
  it('renders correctly', () => {
    const wrapper = render(
      <Tabs
        items={[
          {
            key: '1',
            label: '选项卡一',
            children: 'this is content one',
          },
          {
            key: '2',
            label: '选项卡二',
            children: 'this is content two',
          },
          {
            key: '3',
            label: '选项卡三',
            children: 'this is content three',
          },
        ]}
      />,
    );
    expect(wrapper.container.firstElementChild).toMatchSnapshot();
  });

  it('render the correct default menu', () => {
    const defaultTabKey = '2';
    const items = [
      {
        key: '1',
        label: '选项卡一',
        children: 'this is content one',
      },
      {
        key: '2',
        label: '选项卡二',
        children: 'this is content two',
      },
      {
        key: '3',
        label: '选项卡三',
        children: 'this is content three',
      },
    ];
    const defaultTab = items.find(({ key }) => defaultTabKey === key);
    const { queryByRole, queryByText } = render(<Tabs defaultTabKey={defaultTabKey} items={items} />);

    if (!defaultTab) throw new Error('[Tabs test]: please set correctly defaultTabKey!');

    expect(queryByRole('tablist')).toHaveClass('nav-line');

    expect(queryByRole('tab', { selected: true })?.innerHTML).toBe(defaultTab.label);
    expect(queryByText(defaultTab.children)).toBeInTheDocument();

    items
      .filter(({ key }) => key !== defaultTabKey)
      .forEach(({ label, children }) => {
        expect(queryByRole('tab', { selected: true })?.innerHTML).not.toBe(label);
        expect(queryByText(children)).not.toBeInTheDocument();
      });
  });

  it('render correct className', () => {
    const className = `className-${randomString()}`;
    const items = [
      {
        key: '1',
        label: '选项卡一',
        children: 'this is content one',
      },
      {
        key: '2',
        label: '选项卡二',
        children: 'this is content two',
      },
      {
        key: '3',
        label: '选项卡三',
        children: 'this is content three',
      },
    ];
    const { container } = render(<Tabs className={className} items={items} />);

    expect(container.firstElementChild).toBe(container.querySelector(`.${className}`));
  });

  it('render correct tab type', () => {
    const className = `className-${randomString()}`;
    const lineTabsClassName = `${className}-line-tabs`;
    const cardTabsClassName = `${className}-card-tabs`;
    const items = [
      {
        key: '1',
        label: '选项卡一',
        children: 'this is content one',
      },
      {
        key: '2',
        label: '选项卡二',
        children: 'this is content two',
      },
      {
        key: '3',
        label: '选项卡三',
        children: 'this is content three',
      },
    ];
    const { container } = render(
      <>
        <Tabs className={lineTabsClassName} items={items} />
        <Tabs className={cardTabsClassName} type="card" items={items} />
      </>,
    );

    expect(container.querySelector(`.${lineTabsClassName}`)?.querySelector('.nav-line')).toBeInTheDocument();
    expect(container.querySelector(`.${cardTabsClassName}`)?.querySelector('.nav-card')).toBeInTheDocument();
  });

  it('click tabNav should switch to correct content', () => {
    const triggeringElementIndex = 2;
    const items = [
      {
        key: '1',
        label: '选项卡一',
        children: 'this is content one',
      },
      {
        key: '2',
        label: '选项卡二',
        children: 'this is content two',
      },
      {
        key: '3',
        label: '选项卡三',
        children: 'this is content three',
      },
    ];
    const onSelect = jest.fn();
    const { queryByRole, queryByText } = render(<Tabs items={items} onSelect={onSelect} />);
    const triggeringElement = queryByRole('tab', { selected: false, name: items[triggeringElementIndex].label });

    if (!triggeringElement) throw new Error('[Tabs test]: cannot found triggeringElement!');

    fireEvent.click(triggeringElement);

    expect(queryByRole('tab', { selected: true })).toBe(triggeringElement);
    expect(queryByText(items[triggeringElementIndex].children)).toBeInTheDocument();
    expect(onSelect).toHaveBeenCalledWith(items[triggeringElementIndex].key);
  });

  it('click disabled tabNav should not works', () => {
    const triggeringElementIndex = 1;
    const items = [
      {
        key: '1',
        label: '选项卡一',
        children: 'this is content one',
      },
      {
        key: '2',
        label: '选项卡二',
        children: 'this is content two',
        disabled: true,
      },
      {
        key: '3',
        label: '选项卡三',
        children: 'this is content three',
      },
    ];
    const onSelect = jest.fn();
    const { queryByRole, queryByText } = render(<Tabs items={items} onSelect={onSelect} />);
    const triggeringElement = queryByRole('tab', { selected: false, name: items[triggeringElementIndex].label });

    if (!triggeringElement) throw new Error('[Tabs test]: cannot found triggeringElement!');

    fireEvent.click(triggeringElement);

    expect(queryByRole('tab', { selected: true })).not.toBe(triggeringElement);
    expect(queryByText(items[triggeringElementIndex].children)).not.toBeInTheDocument();
    expect(onSelect).not.toHaveBeenCalled();
  });

  it('render a empty list', () => {
    const { queryAllByRole } = render(<Tabs items={[]} />);
    expect(queryAllByRole('tab')).toHaveLength(0);
  });
});
