import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
} from './test-exercises';

// Capitalize
test('capitalize hello world to Hello World', () => {
  expect(capitalize('hello world')).toBe('HELLO WORLD');
});

// Reverse
test("reverse 'hello' to 'olleh'", () => {
  expect(reverseString('hello')).toBe('olleh');
});

// Calculator: add
test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

// Calculator: subtract
test('subtract 3 - 2 to equal 1', () => {
  expect(calculator.subtract(3, 2)).toBe(1);
});

// Calculator: multiply
test('multiply 4 by 2 to equal 8', () => {
  expect(calculator.multiply(4, 2)).toBe(8);
});

// Calculator: divide
test('divide 4 by 2 to equal 2', () => {
  expect(calculator.divide(4, 2)).toBe(2);
});

// caesarCipher
test('caesarCipher shifts characters correctly', () => {
  expect(caesarCipher('hello', 3)).toBe('khoor');
  expect(caesarCipher('world', -1)).toBe('vnqkc');
  expect(caesarCipher('abc', 0)).toBe('abc');
  expect(caesarCipher('xyz', 1)).toBe('yza');
});
