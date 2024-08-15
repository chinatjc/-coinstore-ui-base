import { fireEvent, render, screen } from '@testing-library/react';
import Alert from '../src/alert';

describe('test Alert component', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  it('renders correctly', () => {
    const { container } = render(<Alert title="title" description="description" />);
    expect(container.firstElementChild).toMatchSnapshot();
  });

  it('render the correct default Alert', () => {
    const randomText = String(Math.random());
    const title = `title_${randomText}`;
    const onClose = jest.fn();

    const wrapper = render(<Alert title={title} onClose={onClose} />);

    expect(screen.queryByText(title)).toBeInTheDocument();
    expect(wrapper.container.querySelector('.alert')).toHaveClass('alert-default');

    fireEvent.click(screen.getByRole('button', { name: /close/i }));

    expect(onClose).toHaveBeenCalledTimes(1);

    if (wrapper.container.firstElementChild) {
      fireEvent.transitionEnd(wrapper.container.firstElementChild);
    }

    expect(wrapper.queryByText(title)).not.toBeInTheDocument();
  });

  it('render the correct Alert based on different type and description', () => {
    const randomText = String(Math.random());
    const title = `title_${randomText}`;
    const description = `description_${randomText}`;

    const wrapper = render(<Alert title={title} description={description} type="success" closable={false} />);

    expect(screen.queryByText(title)).toHaveClass('bold-title');
    expect(wrapper.container.querySelector('.alert')).toHaveClass('alert-success');
    expect(screen.queryByText(description)).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /close/i })).not.toBeInTheDocument();
  });
});
