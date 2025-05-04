/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TailwindTest from './tailwind-test';

describe('TailwindTest', () => {
  it('renders component with Tailwind CSS classes', () => {
    render(<TailwindTest />);
    
    const component = screen.getByTestId('tailwind-test');
    expect(component).toBeInTheDocument();
    
    // タイトルの確認
    const title = screen.getByText('TailwindCSS Test Component');
    expect(title).toHaveClass('text-2xl', 'font-bold', 'text-primary', 'mb-4');
    
    // カードの確認
    const card1Title = screen.getByText('Card 1');
    expect(card1Title).toHaveClass('text-lg', 'font-semibold', 'text-card-foreground');
    
    const card2Title = screen.getByText('Card 2');
    expect(card2Title).toHaveClass('text-lg', 'font-semibold', 'text-secondary-foreground');
    
    // ボタンの確認
    const button = screen.getByText('Test Button');
    expect(button).toHaveClass('mt-4', 'px-4', 'py-2', 'bg-primary', 'text-primary-foreground', 'rounded-md');
  });
});
