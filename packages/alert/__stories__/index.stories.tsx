import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from '../src/alert';
import DocumentationTemplate from './index.mdx';

const meta = {
  title: 'Component/Alert',
  component: Alert,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: DocumentationTemplate,
    },
  },
} satisfies Meta<typeof Alert>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Type: Story = {
  args: {
    title: 'title',
  },
  render: ({ type: _, ...props }) => (
    <div>
      <Alert type="success" {...props} />
      <Alert type="default" {...props} />
      <Alert type="danger" {...props} />
      <Alert type="warning" {...props} />
    </div>
  ),
};

export const Description: Story = {
  args: {
    title: 'title',
    description: 'description',
  },
};

export const Closable: Story = {
  args: {
    title: 'title',
    closable: false,
  },
};

export const CanBeClosed: Story = {
  args: {
    title: 'title',
  },
};
