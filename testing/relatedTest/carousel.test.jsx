/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';
import SimpleCarousel from '../../client/src/components/relatedItems&comparison/carousel';
import fakeProductInfos from './fakeDataInfo';

describe('test SimpleCarousal', () => {
  test('snapshot test', () => {
    const modal = renderer.create(<SimpleCarousel
      relatedProducts={[71699, 71698, 71704, 71703]}
      currentProductId="71704"
      currentProductInfo={fakeProductInfos[0]}
    />).toJSON();
    expect(modal).toMatchSnapshot();
  });
  test('snapshot test', () => {
    const modal = renderer.create(<SimpleCarousel
      relatedProducts={[null, 71699, 71698, 71704, 71703]}
      currentProductId="71704"
      currentProductInfo={fakeProductInfos[0]}
    />).toJSON();
    expect(modal).toMatchSnapshot();
  });
});
