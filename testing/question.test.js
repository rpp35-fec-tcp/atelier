describe("This is an example test", () => {
  //you can define variables that have scope to this describe block
  let someVar = 10;
  let anotherVar = 20;
  let lastVar = 'hello';

  //each 'it' is the starting syntax of another test that should have a descriptive title
  it("anotherVar is twice someVar from question.test.js", () => {
    //each expect statement defines what the test is actually looking for
    expect(someVar * 2).toEqual(anotherVar);
  });

  //you can have multiple it statements in a describe block
  it("should show that anotherVar is not the same type as lastVar", () => {
    let testVar = typeof(anotherVar);

    //you can also have multiple expects in an it statement
    expect(typeof(lastVar)).not.toBe(testVar);
    expect(typeof(lastVar)).toBe('string');
  });
});