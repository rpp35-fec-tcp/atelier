import React from 'react';
import AddToOutFit from '../../client/src/components/relatedItems&comparison/addToOutfit.jsx';
import ReactDOM from 'react-dom/client';
import fakeProductInfos from './fakeData.js';
import {act} from 'react-dom/test-utils';
import {render} from "@testing-library/react";

describe('Card', function() {
  test('render Add to out fit', () => {
    render(<AddToOutFit />);
  })
})