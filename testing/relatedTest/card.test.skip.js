import React from 'react';
import Card from '../../client/src/components/relatedItems&comparison/card.jsx';
import ReactDOM from 'react-dom/client';
import fakeProductInfos from './fakeData.js';
import {act} from 'react-dom/test-utils';
import 'regenerator-runtime/runtime';

describe('Card', function() {
//   var {
//     renderIntoDocument,
//     findRenderedDOMComponentWithClass
//   } = ReactTestUtils;
  //var p0, p1, p2;
  var container;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    // p0 = renderIntoDocument(
    //     <Card id='0' key='0' currentProductInfo={fakeProductInfos[0]}/>
    // );
    // p1 = renderIntoDocument(
    //     <Card id='1' key='1' currentProductInfo={fakeProductInfos[1]}/>
    // );
    // p2 = renderIntoDocument(
    //     <Card id='2' key='2' currentProductInfo={fakeProductInfos[2]}/>
    // )
  });
  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  })


  it('can render a card component', () => {
    act(() => {
      ReactDOM.createRoot(container).render(<Card />);
    })
    const category = container.querySelector('h6');
      console.log('category:', category)
      expect(category).toBe('Kicks');
  })

  // it('should dynamically render a product\'s category', async function() {
  //   var c0 = await findRenderedDOMComponentWithClass(p0, 'card-subtitle');
  //   var c1 = await findRenderedDOMComponentWithClass(p1, 'card-subtitle');
  //   var c2 = await findRenderedDOMComponentWithClass(p2, 'card-subtitle');

  //   expect(c0.innerHTML).to.equal('Kicks');
  //   expect(c1.innerHTML).to.equal('Pants');
  //   expect(c2.innerHTML).to.equal('Pants');
  // });

})
