import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from '../src/tabs';
import DocumentationTemplate from './index.mdx';

const meta = {
  title: 'Component/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: DocumentationTemplate,
    },
  },
  argTypes: {
    defaultTabKey: {
      control: false,
    },
    items: {
      table: {
        type: {
          detail: `interface TabItemType {
  key: TabItemKey;
  label: ReactNode;
  disabled?: boolean;
  children: ReactNode;
}`,
        },
      },
    },
  },
} satisfies Meta<typeof Tabs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
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
    ],
  },
};

export const Type: Story = {
  args: {
    items: [
      {
        key: '4',
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
    ],
  },
  render: ({ type: _, ...props }) => (
    <>
      <Tabs {...props} />
      <br />
      <Tabs {...props} type="card" />
    </>
  ),
};

export const DefaultTabItemKey: Story = {
  args: {
    defaultTabKey: '2',
    items: [
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
    ],
  },
};

export const Disabled: Story = {
  args: {
    items: [
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
    ],
  },
};
