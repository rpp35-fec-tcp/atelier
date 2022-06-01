/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import fakeProductInfos from './fakeDataInfo';
import Card from '../../client/src/components/relatedItems&comparison/card';

describe('Card', () => {
  test('test snapshort', () => {
    const modal = renderer.create(<Card
      id="71704"
      type="related"
      show="false"
      currentProductInfo={fakeProductInfos[0]}
    />).toJSON();
    expect(modal).toMatchSnapshot();
  });
  test('test snapshort', () => {
    const modal = renderer.create(<Card
      id="71704"
      type="outfit"
      show="true"
      currentProductInfo={fakeProductInfos[0]}
    />).toJSON();
    expect(modal).toMatchSnapshot();
    // expect(screen.getByTitle('modal')).toBeInTheDocument();
  });
  // integration test
  // test('when show changed to true, compare should render', async () => {
  //   render(<Card
  //     id="71704"
  //     type="related"
  //     show="false"
  //     currentProductInfo={fakeProductInfos[0]}
  //   />);
  //   const starElement = screen.getByTitle('star');
  //   // fireEvent.change(cardElement, { target: { }});
  //   await userEvent.click(starElement);
  //   expect(screen.getByTitle('modal')).toBeTruthy();
  // });
});
