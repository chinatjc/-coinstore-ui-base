import { render } from '@testing-library/react';
import Link from '../src';

/**
 *
 * TODO：如何测试 a 标签点击之后，跳转页面的行为？
 *
 */

describe('test Link component', () => {
  it('renders correctly', () => {
    const text = 'go to baidu website';
    const wrapper = render(<Link href="http://baidu.com">{text}</Link>);
    expect(wrapper.getByText(text)).toMatchSnapshot();
  });

  it('render the correct default link', () => {
    const url = 'http:baidu.com';
    const text = 'go to baidu website';

    const wrapper = render(<Link href={url}>{text}</Link>);
    const element = wrapper.getByText(text) as HTMLAnchorElement;
    expect(element).toBeInTheDocument();
    expect(element.tagName).toBe('A');
    expect(element).toHaveClass('link');
    expect(element).toHaveAttribute('href', url);
  });

  it('render correct className', () => {
    const url = 'http:baidu.com';
    const text = 'go to baidu website';
    const className = 'big-link';

    const wrapper = render(
      <Link href={url} className={className}>
        {text}
      </Link>,
    );
    const element = wrapper.getByText(text) as HTMLAnchorElement;
    expect(element).toHaveClass('big-link', 'link');
  });

  it('render correct disabled', () => {
    const url = 'http:baidu.com';
    const text = 'go to baidu website';
    const className = 'big-link';
    const disabled = true;

    const wrapper = render(
      <Link href={url} className={className} disabled={disabled}>
        {text}
      </Link>,
    );
    const element = wrapper.getByText(text) as HTMLAnchorElement;
    expect(element).toHaveClass('disabled');
    expect(element).not.toHaveAttribute('href');
  });
});
