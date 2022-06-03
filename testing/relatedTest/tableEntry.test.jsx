/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import TableEntry from '../../client/src/components/relatedItems&comparison/tableEntry';

describe('TableEntry Component', () => {
  it('snapshot test', () => {
    const modal = renderer.create(<TableEntry />).toJSON();
    expect(modal).toMatchSnapshot();
  });
});
