"use client";

/**
 * @jest-environment jsdom
 */
import React from 'react';

// TailwindCSSの動作確認用テストコンポーネント
const TailwindTest = () => {
  return (
    <div className="p-4" data-testid="tailwind-test">
      <h1 className="text-2xl font-bold text-primary mb-4">
        TailwindCSS Test Component
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-card p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold text-card-foreground">
            Card 1
          </h2>
          <p className="text-muted-foreground">This is a test card</p>
        </div>
        <div className="bg-secondary p-4 rounded-lg">
          <h2 className="text-lg font-semibold text-secondary-foreground">
            Card 2
          </h2>
          <p className="text-sm">Another test card</p>
        </div>
      </div>
      <button className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
        Test Button
      </button>
    </div>
  );
};

export default TailwindTest;
