import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Textarea } from './textarea';

describe('Textarea', () => {
  it('renders a textarea with default attributes', () => {
    render(<Textarea data-testid="test-textarea" />);
    const textarea = screen.getByTestId('test-textarea');
    expect(textarea).toBeInTheDocument();
    expect(textarea).toHaveAttribute('data-slot', 'textarea');
  });

  it('accepts and displays typed text', async () => {
    const user = userEvent.setup();
    render(<Textarea placeholder="Type here..." />);
    
    const textarea = screen.getByPlaceholderText('Type here...');
    await user.type(textarea, 'This is a multiline\ntext area content');
    
    expect(textarea).toHaveValue('This is a multiline\ntext area content');
  });

  it('applies custom className', () => {
    render(<Textarea className="custom-class" data-testid="test-textarea" />);
    expect(screen.getByTestId('test-textarea')).toHaveClass('custom-class');
  });

  it('handles disabled state', () => {
    render(<Textarea disabled data-testid="test-textarea" />);
    const textarea = screen.getByTestId('test-textarea');
    expect(textarea).toBeDisabled();
    expect(textarea).toHaveClass('disabled:cursor-not-allowed', 'disabled:opacity-50');
  });

  it('can be resized vertically by default', () => {
    render(<Textarea data-testid="test-textarea" />);
    const textarea = screen.getByTestId('test-textarea');
    // Tailwind's field-sizing-content will handle auto-sizing
    expect(textarea).toHaveClass('field-sizing-content');
  });
});
