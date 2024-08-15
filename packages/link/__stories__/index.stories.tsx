import type { Meta, StoryObj } from '@storybook/react';

import { Link } from '../src/link';
import DocumentationTemplate from './index.mdx';

const meta = {
  title: 'Component/Link',
  component: Link,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: DocumentationTemplate,
    },
  },
} satisfies Meta<typeof Link>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Href: Story = {
  args: {
    href: 'http://baidu.com',
    children: 'baidu.com',
  },
};

export const Disabled: Story = {
  args: {
    href: 'http://baidu.com',
    children: 'baidu.com',
    disabled: true,
  },
};
