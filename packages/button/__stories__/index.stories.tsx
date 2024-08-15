import type { Meta, StoryObj } from '@storybook/react';
import Button from '../src/index';
import DocumentationTemplate from './index.mdx';

const meta = {
  title: 'Component/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: DocumentationTemplate,
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Type: Story = {
  args: {
    children: 'button',
  },
  render: ({ type: _, ...props }) => (
    <div style={{ display: 'flex', gap: '10px' }}>
      <Button {...props} type="default" />
      <Button {...props} type="primary" />
      <Button {...props} type="danger" />
    </div>
  ),
};

export const Size: Story = {
  args: {
    children: 'button',
  },
  render: ({ size: _, ...props }) => (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
      <Button {...props} size="large" />
      <Button {...props} size="middle" />
      <Button {...props} size="small" />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    type: 'primary',
    disabled: true,
    children: 'button',
  },
};
