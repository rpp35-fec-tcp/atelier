import { render } from '@testing-library/react';
import React from 'react';
import SimpleCarousel from '../../client/src/components/relatedItems&comparison/carousel.jsx';
import Card from '../../client/src/components/relatedItems&comparison/card.jsx';
import ReactShallowRenderer from 'react-test-renderer/shallow';

var currentProductInfo = {
  "id": 71704,
  "campus": "hr-rpp",
  "name": "YEasy 350",
  "slogan": "Just jumped over jumpman",
  "description": "These stretchy knit shoes show off asymmetrical lacing and a big sculpted rubber midsole. In a nod to adidas soccer heritage.",
  "category": "Kicks",
  "default_price": "450.00",
  "created_at": "2022-05-11T19:38:15.373Z",
  "updated_at": "2022-05-11T19:38:15.373Z",
  "features": [
      {
          "feature": "Sole",
          "value": "Rubber"
      },
      {
          "feature": "Material",
          "value": "FullControlSkin"
      },
      {
          "feature": "Stitching",
          "value": "Double Stitch"
      }
  ]
};

describe('SimpleCarousal', function() {

  it('should be a stateless functional component', function() {
    expect(React.Component.isPrototypeOf(SimpleCarousel)).toBe(false);
    //shallow(<SimpleCarousel />);
  });

  it('should render one `Card` when given one video', function() {

    var shallowRenderer = new ReactShallowRenderer();
    var oneFakeRelatedProducts = [71699];
    shallowRenderer.render(
      <SimpleCarousel relatedProducts={oneFakeRelatedProducts} currentProductInfo={currentProductInfo} />
    );
    var simpleCarousel = shallowRenderer.getRenderOutput();
    expect(simpleCarousel.props.children.length).toBe(1);
  });

});