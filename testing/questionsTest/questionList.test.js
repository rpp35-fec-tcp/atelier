import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import pretty from 'pretty';
import questionData from './questionData.js';

import QuestionList from '../../client/src/components/questions&answers/listQuestions.jsx';

describe("Questions list is mounting", () => {
  let container = null;
  let fakeproduct_id = 71699;

  beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  it('should be a Class based component', () => {
    expect(React.Component.isPrototypeOf(QuestionList)).toBe(true);
  });

  it('should render a default message if question data is empty', () => {
    act(() => {
      render(<QuestionList product_id={fakeproduct_id} />, container)
    });

    expect(
pretty(container.innerHTML)).toMatchInlineSnapshot(`
"<div class=\\"no-questions\\">
  <h4>Sorry, there are no questions listed for this product</h4><button id=\\"addAQuestion\\">ADD A QUESTION +</button>
</div>"
`);

  });

  xit('should render a list of questions given a product id', () => {

    act(() => {
      render(<QuestionList product_id={fakeproduct_id} />, container)
    });

    expect(
      pretty(container.innerHTML)).
      toMatchInlineSnapshot(`
"<div class=\\"questionList\\">
  <h4 id=\\"question-header\\">Q: </h4>
  <ul></ul>
</div>"
`);
  })


});