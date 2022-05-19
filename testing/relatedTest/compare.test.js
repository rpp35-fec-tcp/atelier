import React from 'react';
import Compare from '../../client/src/components/relatedItems&comparison/compare.jsx';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import fakeProductInfos from './fakeData.js';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

describe('Compare', function() {
  let container = null;
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });
  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  })

  it('should be a stateless functional component', function() {
    expect(React.Component.isPrototypeOf(Compare)).toBe(false);
    //shallow(<SimpleCarousel />);
  });

  it('it should render a Modal', () => {
    act(() => {
      render(
        <Compare
          show='true'
          comparedProductInfo={fakeProductInfos[0]}
          currentProductInfo={fakeProductInfos[1]}
          changeShow={() => show = !show}/>,
        container);
    });
    expect(container.querySelector('Modal')).toBeTruly;
  })

  it('it should render a Table', () => {
    act(() => {
      render(
        <Compare
          show='true'
          comparedProductInfo={fakeProductInfos[0]}
          currentProductInfo={fakeProductInfos[1]}
          changeShow={() => show = !show}/>,
        container);
    });
    expect(container.querySelector('Table')).toBeTruly;
  })
});