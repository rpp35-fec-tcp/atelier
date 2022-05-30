/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import fakeProductInfos from './fakeData';
import Card from '../../client/src/components/relatedItems&comparison/card';

describe('Card', () => {
  it('test snapshort', async () => {
    const modal = renderer.create(<Card />).toJSON();
    expect(await modal).toMatchSnapshot();
  });

});
