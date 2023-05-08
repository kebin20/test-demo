function capitalize(str) {
  return str.toUpperCase();
}

function reverseString(str) {
  return str.split('').reverse().join('');
}

class Calculator {
  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  divide(a, b) {
    return a / b;
  }

  multiply(a, b) {
    return a * b;
  }
}

const calculator = new Calculator();


export { capitalize, reverseString, calculator };
