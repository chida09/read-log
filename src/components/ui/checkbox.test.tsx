import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Checkbox } from './checkbox';

describe('Checkbox', () => {
  it('renders a checkbox with default attributes', () => {
    render(<Checkbox data-testid="test-checkbox" />);
    const checkbox = screen.getByTestId('test-checkbox');
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).toHaveAttribute('data-slot', 'checkbox');
  });

  it('toggles checked state when clicked', async () => {
    const user = userEvent.setup();
    render(<Checkbox data-testid="test-checkbox" />);
    
    const checkbox = screen.getByTestId('test-checkbox');
    
    // Initially unchecked
    expect(checkbox).toHaveAttribute('data-state', 'unchecked');
    
    // Click to check
    await user.click(checkbox);
    expect(checkbox).toHaveAttribute('data-state', 'checked');
    
    // Click to uncheck
    await user.click(checkbox);
    expect(checkbox).toHaveAttribute('data-state', 'unchecked');
  });

  it('supports controlled mode with checked attribute', () => {
    render(
      <Checkbox 
        checked={true}
        data-testid="test-checkbox" 
      />
    );
    
    const checkbox = screen.getByTestId('test-checkbox');
    expect(checkbox).toHaveAttribute('data-state', 'checked');
  });

  it('handles disabled state', () => {
    render(<Checkbox disabled data-testid="test-checkbox" />);
    const checkbox = screen.getByTestId('test-checkbox');
    expect(checkbox).toHaveClass('disabled:cursor-not-allowed', 'disabled:opacity-50');
  });

  it('applies custom className', () => {
    render(<Checkbox className="custom-class" data-testid="test-checkbox" />);
    expect(screen.getByTestId('test-checkbox')).toHaveClass('custom-class');
  });
});
