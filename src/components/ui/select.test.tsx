import { render, screen } from '@testing-library/react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './select';

describe('Select', () => {
  it('renders a select with trigger and value', () => {
    render(
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
        </SelectContent>
      </Select>
    );

    expect(screen.getByText('Select an option')).toBeInTheDocument();
  });

  it('applies data-state attribute to trigger', () => {
    render(
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
        </SelectContent>
      </Select>
    );

    const trigger = screen.getByRole('combobox');
    expect(trigger).toHaveAttribute('data-state', 'closed');
  });

  it('applies correct data-slot attributes', () => {
    render(
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option1">Option 1</SelectItem>
        </SelectContent>
      </Select>
    );

    expect(screen.getByRole('combobox')).toHaveAttribute('data-slot', 'select-trigger');
    expect(screen.getByText('Select an option')).toHaveAttribute('data-slot', 'select-value');
  });

  it('supports different trigger sizes', () => {
    const { rerender } = render(
      <Select>
        <SelectTrigger size="sm">
          <SelectValue placeholder="Small select" />
        </SelectTrigger>
      </Select>
    );

    expect(screen.getByRole('combobox')).toHaveAttribute('data-size', 'sm');

    rerender(
      <Select>
        <SelectTrigger size="default">
          <SelectValue placeholder="Default select" />
        </SelectTrigger>
      </Select>
    );

    expect(screen.getByRole('combobox')).toHaveAttribute('data-size', 'default');
  });
});
