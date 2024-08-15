import type { Meta, StoryObj } from '@storybook/react';
import type { IconProps } from '../src/types';

import { Icon } from '../src/icon';
import DocumentationTemplate from './index.mdx';

const meta = {
  title: 'Component/Icon',
  component: Icon,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: DocumentationTemplate,
    },
  },
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

// @ts-ignore: ts(2590) because IconProp is a union type, which exceeds the limitations of TypeScript.
export const Icons: Story = {
  args: {
    icon: '' as IconProps['icon'],
  },
  render: ({ icon: _1, theme: _2, ...props }) => (
    <div style={{ display: 'flex', gap: '20px', fontSize: '80px' }}>
      <Icon theme="primary" icon="house" {...props} />
      <Icon theme="primary" icon="magnifying-glass" {...props} />
      <Icon theme="primary" icon="facebook" {...props} />
      <Icon theme="primary" icon="download" {...props} />
      <Icon theme="primary" icon="twitter" {...props} />
    </div>
  ),
};

export const Type: Story = {
  args: {
    icon: '' as IconProps['icon'],
  },
  render: ({ icon: _1, theme: _2, ...props }) => (
    <div style={{ display: 'flex', gap: '20px', fontSize: '80px' }}>
      <Icon theme="primary" icon="house" {...props} />
      <Icon theme="secondary" icon="house" {...props} />
      <Icon theme="success" icon="house" {...props} />
      <Icon theme="info" icon="house" {...props} />
      <Icon theme="warning" icon="house" {...props} />
      <Icon theme="danger" icon="house" {...props} />
      <Icon theme="light" icon="house" {...props} />
      <Icon theme="dark" icon="house" {...props} />
    </div>
  ),
};

export const Spin: Story = {
  // @ts-ignore: ts(2590) because IconProp is a union type, which exceeds the limitations of TypeScript.
  args: {
    icon: 'house' as IconProps['icon'],
    spin: true,
    style: { fontSize: '80px' },
  },
};
