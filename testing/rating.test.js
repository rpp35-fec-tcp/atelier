import { render } from '@testing-library/react';
import React from 'react';
import Card from '../client/src/components/relatedItems&comparison/card.jsx';

describe('Card component', () => {
  test('it renders', () => {
    render(<Card />);
  });
 })

 ///1. unit test in card.jsx for getReviews to check rating function




// Inside the describe block you descriptively name the test block
// and can then write multiple tests that are related to each other
// describe("This is an example test", () => {
//   //you can define variables that have scope to this describe block
//   let someVar = 10;
//   let anotherVar = 20;
//   let lastVar = 'hello';

//   //each 'it' is the starting syntax of another test that should have a descriptive title
//   it("anotherVar is twice someVar", () => {
//     //each expect statement defines what the test is actually looking for
//     expect(someVar * 2).toEqual(anotherVar);
//   });

//   //you can have multiple it statements in a describe block
//   it("should show that anotherVar is not the same type as lastVar", () => {
//     let testVar = typeof(anotherVar);

//     //you can also have multiple expects in an it statement
//     expect(typeof(lastVar)).not.toBe(testVar);
//     expect(typeof(lastVar)).toBe('string');
//   });
// });