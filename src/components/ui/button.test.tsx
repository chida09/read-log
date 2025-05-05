import { render, screen } from '@testing-library/react';
import { Button } from './button';

describe('Button', () => {
  it('renders a button with default class names', () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole('button', { name: 'Click me' });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('data-slot', 'button');
  });

  it('renders with different variants', () => {
    const { rerender } = render(<Button variant="destructive">Destructive Button</Button>);
    expect(screen.getByRole('button')).toHaveClass('bg-destructive');

    rerender(<Button variant="outline">Outline Button</Button>);
    expect(screen.getByRole('button')).toHaveClass('border');

    rerender(<Button variant="secondary">Secondary Button</Button>);
    expect(screen.getByRole('button')).toHaveClass('bg-secondary');

    rerender(<Button variant="ghost">Ghost Button</Button>);
    expect(screen.getByRole('button')).toHaveClass('hover:bg-accent');

    rerender(<Button variant="link">Link Button</Button>);
    expect(screen.getByRole('button')).toHaveClass('text-primary');
  });

  it('renders with different sizes', () => {
    const { rerender } = render(<Button size="sm">Small Button</Button>);
    expect(screen.getByRole('button')).toHaveClass('h-8');

    rerender(<Button size="lg">Large Button</Button>);
    expect(screen.getByRole('button')).toHaveClass('h-10');

    rerender(<Button size="icon">Icon Button</Button>);
    expect(screen.getByRole('button')).toHaveClass('size-9');
  });

  it('renders as a child component when asChild is true', () => {
    render(
      <Button asChild>
        <a href="#test">Custom Link</a>
      </Button>
    );
    const link = screen.getByRole('link');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '#test');
  });
});
