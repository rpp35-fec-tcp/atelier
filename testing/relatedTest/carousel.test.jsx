/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';
import SimpleCarousel from '../../client/src/components/relatedItems&comparison/carousel';
import fakeProductInfos from './fakeDataInfo';

describe('test SimpleCarousal', () => {
  test('snapshot test for related list', () => {
    const modal = renderer.create(<SimpleCarousel
      relatedProducts={fakeProductInfos}
      currentProductId="71704"
      currentProductInfo={fakeProductInfos[0]}
    />).toJSON();
    expect(modal).toMatchSnapshot();
  });
  test('snapshot test for outfit list', () => {
    const modal = renderer.create(<SimpleCarousel
      relatedProducts={[null, ...fakeProductInfos]}
      currentProductId="71704"
      currentProductInfo={fakeProductInfos[0]}
    />).toJSON();
    expect(modal).toMatchSnapshot();
  });
});
