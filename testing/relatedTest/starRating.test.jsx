/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import StarRating from '../../client/src/components/relatedItems&comparison/starRating';

describe('Rating Component', () => {
  it('snapshot rating component', () => {
    const modal = renderer.create(<StarRating />).toJSON();
    expect(modal).toMatchSnapshot();
  });
});
