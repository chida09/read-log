import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Input } from './input';

describe('Input', () => {
  it('renders an input with default attributes', () => {
    render(<Input data-testid="test-input" />);
    const input = screen.getByTestId('test-input');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('data-slot', 'input');
  });

  it('accepts and displays typed text', async () => {
    const user = userEvent.setup();
    render(<Input placeholder="Type here..." />);
    
    const input = screen.getByPlaceholderText('Type here...');
    await user.type(input, 'Hello World');
    
    expect(input).toHaveValue('Hello World');
  });

  it('supports different input types', () => {
    const { rerender } = render(<Input type="password" data-testid="test-input" />);
    expect(screen.getByTestId('test-input')).toHaveAttribute('type', 'password');

    rerender(<Input type="email" data-testid="test-input" />);
    expect(screen.getByTestId('test-input')).toHaveAttribute('type', 'email');

    rerender(<Input type="number" data-testid="test-input" />);
    expect(screen.getByTestId('test-input')).toHaveAttribute('type', 'number');
  });

  it('applies custom className', () => {
    render(<Input className="custom-class" data-testid="test-input" />);
    expect(screen.getByTestId('test-input')).toHaveClass('custom-class');
  });

  it('handles disabled state', () => {
    render(<Input disabled data-testid="test-input" />);
    const input = screen.getByTestId('test-input');
    expect(input).toBeDisabled();
    expect(input).toHaveClass('disabled:pointer-events-none', 'disabled:cursor-not-allowed', 'disabled:opacity-50');
  });
});
