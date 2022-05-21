import React from 'react';

import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Overview from '../client/src/components/overview/Overview.jsx';
import ImageGallery from '../client/src/components/overview/ImageGallery.jsx';
import ProductInformation from '../client/src/components/overview/ProductInformation.jsx';
import AddToCart from '../client/src/components/overview/AddToCart.jsx';
import StyleSelector from '../client/src/components/overview/StyleSelector.jsx';

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
    render(<ProductInformation />);
  });
});

describe('Cart', () => {
  test('Shows the cart', () => {
    render(<AddToCart />);
  });
});

describe('Style Selector', () => {
  test('Shows the style selection', () => {
    render(<StyleSelector />);
  });
});
