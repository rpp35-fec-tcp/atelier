/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen, fireEvent } from '@testing-library/react';
import fakeProductInfos from './fakeDataInfo';
import Card from '../../client/src/components/relatedItems&comparison/card';

describe('Card', () => {
  test('test snapshort', () => {
    const modal = renderer.create(<Card
      id="71704"
      type="related"
      show="false"
    />).toJSON();
    expect(modal).toMatchSnapshot();
  });
  test('test snapshort', () => {
    const modal = renderer.create(<Card
      id="71704"
      type="outfit"
      show="true"
    />).toJSON();
    expect(modal).toMatchSnapshot();
    // expect(screen.getByTitle('modal')).toBeInTheDocument();
  });
  // integration test
  // test('when show changed to true, compare should render', async () => {
  //   const wrapper = shallow(<Card
  //     id="71704"
  //     type="related"
  //     show="false"
  //     // changeCurrentProductId={changeCurrentProductId}
  //     currentProductInfo={fakeProductInfos[0]}
  //   />);
  //   await wrapper.instance().componentDidMount();
  //   expect(wrapper.state('comparedProductInformation')).toHaveProperty('23123');
    // const starElement = screen.getByTitle('star');
    // // fireEvent.change(cardElement, { target: { }});
    // fireEvent.click(starElement);
    // const compareElemnet = screen.getByTitle('modal');
    // expect(compareElemnet).toBeInTheDocument();
    // card.setState({ show: 'true' });
  // });
});
