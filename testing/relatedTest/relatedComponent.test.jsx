/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// import fakeProductInfos from './fakeDataInfo';
import { BrowserRouter } from 'react-router-dom';
import RelatedComponent from '../../client/src/components/relatedItems&comparison/relatedComponent';

// const MockRelated = () => {
//   return (
//     <BrowserRouter>
//       <RelatedComponent />
//     </BrowserRouter>
//   )
// }

describe('Integration Test', () => {
  it('snapshot rating component', () => {
    const modal = renderer.create(<RelatedComponent />).toJSON();
    expect(modal).toMatchSnapshot();
  });
});
