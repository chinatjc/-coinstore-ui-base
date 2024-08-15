import { render, fireEvent } from '@testing-library/react';
import Button from '../src';

describe('test Button component', () => {
  it('renders correctly', () => {
    const text = 'button';
    const wrapper = render(<Button type="primary">{text}</Button>);
    expect(wrapper.getByText(text)).toMatchSnapshot();
  });

  it('render the correct default button', () => {
    const text = 'button';
    const fn = jest.fn();

    const wrapper = render(<Button onClick={fn}>{text}</Button>);
    const element = wrapper.getByText(text) as HTMLButtonElement;
    expect(element).toBeInTheDocument();
    expect(element.tagName).toBe('BUTTON');
    expect(element).toHaveClass('btn');
    expect(element).toBeEnabled();

    fireEvent.click(element);

    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('render correct component based on different props', () => {
    const text = 'button';
    const className = 'klass';

    const wrapper = render(
      <Button className={className} type="primary" size="large">
        {text}
      </Button>,
    );
    const element = wrapper.getByText(text) as HTMLButtonElement;

    expect(element).toBeInTheDocument();
    expect(element).toHaveClass(className, 'btn', 'btn-large', 'btn-primary');
  });

  it('render correct disabled', () => {
    const text = 'button';
    const fn = jest.fn();

    const wrapper = render(
      <Button disabled onClick={fn}>
        {text}
      </Button>,
    );
    const element = wrapper.getByText(text) as HTMLButtonElement;
    expect(element).toBeInTheDocument();
    expect(element).toBeDisabled();

    fireEvent.click(element);

    expect(fn).not.toHaveBeenCalled();
  });
});
