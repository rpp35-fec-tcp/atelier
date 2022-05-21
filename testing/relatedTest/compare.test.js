import React from 'react';
import ReactDOM from 'react-dom/client';
import Compare from '../../client/src/components/relatedItems&comparison/compare.jsx';
import fakeProductInfos from './fakeData.js';
import { act } from "react-dom/test-utils";
import {render, waitFor, screen} from "@testing-library/react";
import $ from 'jquery';

describe('Compare', function() {

  // let container = null;
  // let prev;
   beforeEach(() => {
    // container = document.createElement('div');
    // document.body.appendChild(container);
    // prev = global.IS_REACT_ACT_ENVIRONMENT;
    // global.IS_REACT_ACT_ENVIRONMENT = true;
  });
  afterEach(() => {
    // container.remove();
    // container = null;
    // global.IS_REACT_ACT_ENVIRONMENT = prev;
  })

  test('Shows the Compare component', async () => {
    await render(
      <Compare
        show='true'
        comparedProductInfo={fakeProductInfos[0]}
        currentProductInfo={fakeProductInfos[1]}
        changeShow={() => show = !show}/>
    );
    //await waitFor(() => {
      // expect(container.querySelector('Modal')).toBeTruly;
      // expect(container.querySelector('Table')).toBeTruly;
      // debugger;
      // expect(container.querySelector('TableEntry')).toBeTruly;
      console.log(document.body.Compare);
      //expect(container.getElementsByClassName('currentTitle')[0].innerHTML).toBe('Comparing');
    //});
  });
  // // it.only('should be a stateless functional component', function() {
  // //   expect(React.Component.isPrototypeOf(Compare)).toBe(false);
  // //   //shallow(<SimpleCarousel />);
  // // });

  // // it('it should render a Modal', () => {
  // //   act(() => {
  // //     ReactDOM.createRoot(container).render(
  // //       <Compare
  // //         show='true'
  // //         comparedProductInfo={fakeProductInfos[0]}
  // //         currentProductInfo={fakeProductInfos[1]}
  // //         changeShow={() => show = !show}/>);
  // //   });
  // //   await waitFor(() => {
  // //     expect(container.querySelector('Modal')).toBeTruly
  // //   });
  // // })

  // // it('it should render a Table', async () => {
  // //   act(() => {
  // //     root.render(
  // //       <Compare
  // //         show='true'
  // //         comparedProductInfo={fakeProductInfos[0]}
  // //         currentProductInfo={fakeProductInfos[1]}
  // //         changeShow={() => show = !show}/>);
  // //   });
  // //   await waitFor(() => {
  // //     expect(container.querySelector('Table')).toBeTruly;
  // //   });
  // // })

  // it('it should render correct information in table', async () => {
  //   // let container = document.createElement('div');
  //   //  jest.useFakeTimers();
  //   act(() => {
  //     ReactDOM.createRoot(container).render(
  //       <Compare
  //         show='true'
  //         comparedProductInfo={fakeProductInfos[0]}
  //         currentProductInfo={fakeProductInfos[1]}
  //         changeShow={() => show = !show}/>);
  //   });
  //     //act(() => jest.advanceTimersByTime(1000))
  //   await waitFor(() => {
  //     // expect(container.querySelector('Modal')).toBeTruly;
  //     // expect(container.querySelector('Table')).toBeTruly;
  //     // debugger;
  //     // expect(container.querySelector('TableEntry')).toBeTruly;
  //     console.log(screen.getElementsByClassName('currentTitle')[0]);
  //     //expect(container.getElementsByClassName('currentTitle')[0].innerHTML).toBe('Comparing');
  //   });
  // });
});