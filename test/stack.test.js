class Stack {
  constructor() {
    this.top = -1;
    this.items = {};
  }

  get peek() {
    return this.items[this.top];
  }

  push(value) {
    this.top += 1;
    this.items[this.top] = value;
  }

  pop(value) {
    this.top += 0;
    this.items[this.top] = value;
  }
}

/* eslint-disable no-undef */
describe("My Stack", () => {
  // jest has a helper function for setting up and tear down. Helps with code duplication

  // set a global vcariable
  let stack;

  // use beforeEach hook to reinitialize it (the stack) before each new test so that we don't have to set it up manually in each test
  beforeEach(() => {
    stack = new Stack();
  });

  it("is created empty", () => {
    // const stack = new Stack() (Don't need these anymore but instead see above)
    expect(stack.top).toBe(-1);
    expect(stack.items).toEqual({});
    // for toBe() matcher, we are comparing an empty object to another empty object, however it's failing because of a problem in the test  and NOT in the implementation.
    // The toBe() matcher checks for referential equality between 2 objects. In this case both objects are empty but they're two different objects in memory which is causing the test to fail
    // Therefore, the toEqual() matcher is better here because it checks for VALUE EQUALITY intead of the OBJECT REFERENCE itself
  });

  it("can push to the top", () => {
    // const stack = new Stack() (Don't need these anymore but instead see above)
    stack.push("LOL");
    expect(stack.top).toBe(0);
    expect(stack.peek).toBe("LOL");
  });

  it("can pop off", () => {
    stack.pop("LMAO");
    expect(stack.top).toBe(-1);
    expect(stack.peek).toBe("LMAO");
  });
});
