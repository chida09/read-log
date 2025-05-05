import { render, screen } from '@testing-library/react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardAction,
} from './card';

describe('Card', () => {
  it('renders a card with all subcomponents', () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card description text</CardDescription>
          <CardAction>Action</CardAction>
        </CardHeader>
        <CardContent>Card content</CardContent>
        <CardFooter>Card footer</CardFooter>
      </Card>
    );

    // Test the main card
    expect(screen.getByText('Card Title').closest('[data-slot="card"]')).toBeInTheDocument();

    // Test subcomponents
    expect(screen.getByText('Card Title')).toHaveAttribute('data-slot', 'card-title');
    expect(screen.getByText('Card description text')).toHaveAttribute('data-slot', 'card-description');
    expect(screen.getByText('Action')).toHaveAttribute('data-slot', 'card-action');
    expect(screen.getByText('Card content')).toHaveAttribute('data-slot', 'card-content');
    expect(screen.getByText('Card footer')).toHaveAttribute('data-slot', 'card-footer');
  });

  it('applies custom className to card components', () => {
    render(
      <Card className="custom-card">
        <CardHeader className="custom-header">
          <CardTitle className="custom-title">Title</CardTitle>
        </CardHeader>
      </Card>
    );

    expect(screen.getByText('Title').closest('[data-slot="card"]')).toHaveClass('custom-card');
    expect(screen.getByText('Title').closest('[data-slot="card-header"]')).toHaveClass('custom-header');
    expect(screen.getByText('Title')).toHaveClass('custom-title');
  });
});
