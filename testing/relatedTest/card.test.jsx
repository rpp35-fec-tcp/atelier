/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import fakeProductInfos from './fakeDataInfo';
import Interaction from '../../client/src/components/relatedItems&comparison/interactions';
import Card from '../../client/src/components/relatedItems&comparison/card';

// jest.spyOn(Interaction(), 'Interaction');

describe('Card', () => {
  test('test snapshort', () => {
    const modal = renderer.create(<Card
      id="71704"
      productInfo={fakeProductInfos[0]}
      type="related"
      show="false"
      currentProductInfo={fakeProductInfos}
    />).toJSON();
    expect(modal).toMatchSnapshot();
  });
  test('test snapshort', () => {
    const modal = renderer.create(<Card
      id="71704"
      productInfo={fakeProductInfos[0]}
      type="outfit"
      show="true"
      currentProductInfo={fakeProductInfos}
    />).toJSON();
    expect(modal).toMatchSnapshot();
    // expect(screen.getByTitle('modal')).toBeInTheDocument();
  });
  // it('click card should call interaction function', () => {

  //   render(<Card
  //     id="71704"
  //     productInfo={fakeProductInfos[0]}
  //     type="outfit"
  //     show="true"
  //     currentProductInfo={fakeProductInfos}
  //     changeCurrentProductId={()=>console.log('12345')}
  //   />);
  //   const card = screen.getByRole('button');
  //   fireEvent.click(card);
  //   expect(Interaction).toHaveBeenCalled();
  // });
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
