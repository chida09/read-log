import { render, screen } from '@testing-library/react';
import { useForm } from 'react-hook-form';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from './form';

// Test component to wrap form functionality
function TestForm({
  onSubmit,
  defaultValues = {},
  error = null,
}: {
  onSubmit?: (values: any) => void;
  defaultValues?: Record<string, any>;
  error?: string | null;
}) {
  const form = useForm({
    defaultValues,
  });

  if (error) {
    form.setError('test', { message: error });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit || (() => {}))}>
        <FormField
          control={form.control}
          name="test"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Test Label</FormLabel>
              <FormControl>
                <input {...field} placeholder="Test input" />
              </FormControl>
              <FormDescription>This is a description</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}

describe('Form', () => {
  it('renders form components with correct data-slot attributes', () => {
    render(<TestForm />);

    expect(screen.getByText('Test Label')).toHaveAttribute('data-slot', 'form-label');
    expect(screen.getByText('This is a description')).toHaveAttribute('data-slot', 'form-description');
    
    const formItem = screen.getByText('Test Label').closest('[data-slot="form-item"]');
    expect(formItem).toBeInTheDocument();
  });

  it('displays error message when form has errors', () => {
    render(<TestForm error="This is an error message" />);

    const errorMessage = screen.getByText('This is an error message');
    expect(errorMessage).toHaveAttribute('data-slot', 'form-message');
    expect(errorMessage).toHaveClass('text-destructive');
  });

  it('applies error state to form label when field has errors', () => {
    render(<TestForm error="Field error" />);

    const label = screen.getByText('Test Label');
    expect(label).toHaveAttribute('data-error', 'true');
    expect(label).toHaveClass('data-[error=true]:text-destructive');
  });
});
