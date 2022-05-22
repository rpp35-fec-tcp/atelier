import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import AddToCart from '../client/src/components/overview/AddToCart.jsx';
import ImageGallery from '../client/src/components/overview/ImageGallery.jsx';
import Overview from '../client/src/components/overview/Overview.jsx';
import ProductInformation from '../client/src/components/overview/ProductInfo.jsx';
import StyleSelector from '../client/src/components/overview/StyleSelector.jsx';

describe('Overview', () => {
  test('Shows the overview component', () => {
    render(<Overview />);
  });

  test('Loads and displays a Product Overview Component', () => {
    render(<ProductOverview currentProduct={specificProduct} currentProductStyle={style} currentReview={dummyReviews.meta}
      toggleFavorite={jest.fn()} currentStyleId={style.results[0].style_id} addToFavorites={[]} />);
    expect(screen.getByTestId('Overview')).toBeInTheDocument();
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
