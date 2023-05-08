import {sum, capitalize} from './test-exercises';

// Sum
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

// Capitalize
test("capitalize hello world to Hello World", () => {
  expect(capitalize("hello world")).toBe("HELLO WORLD");
});

