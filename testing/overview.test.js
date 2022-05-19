import React from 'react';

import Overview from './client/src/components/overview/Overview.jsx';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

describe('Overview', () => {
  test('Shows the overview component', () => {
    render(<Overview />);
  });
});

describe('Gallery', () => {
  test('Shows the gallery component', () => {
    render(<ImageGallery />);
  });
});

describe('Description', () => {
  test('Shows the product component', () => {
    render(<ProductInfo />);
  });
});

describe('Cart', () => {
  test('Shows the cart', () => {
    render(<AddToCart />);
  });
});
