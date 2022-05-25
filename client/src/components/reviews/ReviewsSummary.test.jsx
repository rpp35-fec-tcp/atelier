import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { createRoot } from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import ReviewsSummary from './ReviewsSummary';

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('renders reviews summary data', async () => {
  const reviewCount = 0;

  act(() => {
    const root = createRoot(container);
    root.render(<ReviewsSummary reviewCount={reviewCount} />);
  });

  expect(container.querySelector('span').textContent)
    .toBe('0 reviews, sorted by ');
});
