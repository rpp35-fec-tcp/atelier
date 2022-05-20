import React from 'react';
import ReactDOM from 'react-dom/client';
import Compare from '../../client/src/components/relatedItems&comparison/compare.jsx';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import fakeProductInfos from './fakeData.js';
import {createRoot} from 'react-dom/client';
import { act } from "react-dom/test-utils";
import {render, waitFor} from "@testing-library/react";
import $ from 'jquery';

describe('Compare', function() {
  let container = null;
  let root;
  let prev;
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    // root = createRoot(container);
    prev = global.IS_REACT_ACT_ENVIRONMENT;
    global.IS_REACT_ACT_ENVIRONMENT = true;
  });
  afterEach(() => {
    //root.unmount();
    container.remove();
    container = null;
    global.IS_REACT_ACT_ENVIRONMENT = prev;
  })

  // it.only('should be a stateless functional component', function() {
  //   expect(React.Component.isPrototypeOf(Compare)).toBe(false);
  //   //shallow(<SimpleCarousel />);
  // });

  // it('it should render a Modal', async () => {
  //   act(() => {
  //     ReactDOM.createRoot(container).render(
  //       <Compare
  //         show='true'
  //         comparedProductInfo={fakeProductInfos[0]}
  //         currentProductInfo={fakeProductInfos[1]}
  //         changeShow={() => show = !show}/>);
  //   });
  //   await waitFor(() => {
  //     expect(container.querySelector('Modal')).toBeTruly
  //   });
  // })

  // it('it should render a Table', async () => {
  //   act(() => {
  //     root.render(
  //       <Compare
  //         show='true'
  //         comparedProductInfo={fakeProductInfos[0]}
  //         currentProductInfo={fakeProductInfos[1]}
  //         changeShow={() => show = !show}/>);
  //   });
  //   await waitFor(() => {
  //     expect(container.querySelector('Table')).toBeTruly;
  //   });
  // })

  it('it should render correct information in table', () => {
    // act(() => {
    //   ReactDOM.createRoot(container).render(
    //     <Compare
    //       show='true'
    //       comparedProductInfo={fakeProductInfos[0]}
    //       currentProductInfo={fakeProductInfos[1]}
    //       changeShow={() => show = !show}/>);
    // });
    //await waitFor(() => {
      console.log(container);
      expect(container.getElementsByClassName('currentTitle')[0].innerHTML).toBe('Comparing');
    });
  //})
});