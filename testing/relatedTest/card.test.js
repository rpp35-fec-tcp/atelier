import React from 'react';
import Card from '../../client/src/components/relatedItems&comparison/card.jsx';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import fakeProductInfos from './fakeData.js';
import ReactTestUtils from 'react-dom/test-utils';

describe('Card', function() {
  var {
    renderIntoDocument,
    findRenderedDOMComponentWithClass
  } = ReactTestUtils;
  var p0, p1, p2;
  beforeEach(function() {
    p0 = renderIntoDocument(
      // <Wrapper>
        <Card id='0' key='0'currentProductInfo={fakeProductInfos[0]}/>
      // </Wrapper>
    );
    p1 = renderIntoDocument(
      // <Wrapper>
        <Card id='1' key='1'currentProductInfo={fakeProductInfos[1]}/>
      // </Wrapper>
    );
    p2 = renderIntoDocument(
      // <Wrapper>
        <Card id='2' key='2'currentProductInfo={fakeProductInfos[2]}/>
      // </Wrapper>
    )
  });

  it('should render a card component', function() {
    expect(React.Component.isPrototypeOf(Card)).toBeFalsy;
  });

  // it('should dynamically render a product\'s category', async function() {
  //   var c0 = await findRenderedDOMComponentWithClass(p0, 'card-subtitle');
  //   var c1 = await findRenderedDOMComponentWithClass(p1, 'card-subtitle');
  //   var c2 = await findRenderedDOMComponentWithClass(p2, 'card-subtitle');

  //   expect(c0.innerHTML).to.equal('Kicks');
  //   expect(c1.innerHTML).to.equal('Pants');
  //   expect(c2.innerHTML).to.equal('Pants');
  // });

})
