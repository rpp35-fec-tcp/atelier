/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import Price from '../../client/src/components/relatedItems&comparison/price';
import fakeDataStyle from './fakeDataStyle';

describe('Price Component', () => {
  it('snapshot test', () => {
    const modal = renderer.create(<Price defaultItem={fakeDataStyle[3]} />).toJSON();
    expect(modal).toMatchSnapshot();
  });
  it('snapshot test', () => {
    const modal = renderer.create(<Price defaultItem={fakeDataStyle[2]} />).toJSON();
    expect(modal).toMatchSnapshot();
  });
});
