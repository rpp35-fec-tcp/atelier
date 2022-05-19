import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import pretty from 'pretty';
import questionData from './questionData.js';

import Answers from '../../client/src/components/questions&answers/answers.jsx';

describe("Answers list is mounting", () => {
  let container = null;
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
    expect(React.Component.isPrototypeOf(Answers)).toBe(true);
  });

  it('should render a list of questions given a product id', () => {
    let fakequestion_id = 631392;

    act(() => {
      render(<Answers question_id={fakequestion_id} />, container)
    });

    expect(
pretty(container.innerHTML)).
toMatchInlineSnapshot(`
"<div class=\\"answers\\">
  <h4 id=\\"answer-header\\">A:</h4>
  <ul></ul>
</div>"
`);
  })


});