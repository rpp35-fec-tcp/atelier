import React from 'react';
import SimpleCarousel from '../../client/src/components/relatedItems&comparison/carousel.jsx';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import fakeProductInfos from './fakeData.js';
import {render} from "@testing-library/react";

describe('SimpleCarousal', function() {

  it('should be a stateless functional component', function() {
    expect(React.Component.isPrototypeOf(SimpleCarousel)).toBe(false);
    //shallow(<SimpleCarousel />);
  });

  it('should render one `Card` when given array with one related product', function() {

    var shallowRenderer = new ReactShallowRenderer();
    var fakeRelatedProducts = [71699];
    shallowRenderer.render(
      <SimpleCarousel relatedProducts={fakeRelatedProducts} currentProductInfo={fakeProductInfos[0]} />
    );
    var simpleCarousel = shallowRenderer.getRenderOutput();
    expect(simpleCarousel.props.children.length).toBe(1);
  });

  it ('should render multiple `Card` when given array with multiple related products', function () {
    var shallowRenderer = new ReactShallowRenderer();
    var fakeRelatedProducts = [71699, 71701, 71702];
    shallowRenderer.render(
      <SimpleCarousel relatedProducts={fakeRelatedProducts} currentProductInfo={fakeProductInfos[0]} />
    )
    var simpleCarousel = shallowRenderer.getRenderOutput();
    expect(simpleCarousel.props.children.length).toBe(3);
  })

});