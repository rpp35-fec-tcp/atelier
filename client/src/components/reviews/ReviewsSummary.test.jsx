import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
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
    render(<ReviewsSummary reviewCount={reviewCount} />, container);
  });

  expect(container.querySelector('span').textContent)
    .toBe('0 reviews, sorted by ');
});
