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

//Caesar cipher
function caesarCipher(str, shift) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let result = '';

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const isUpperCase = char === char.toUpperCase();
    const charIndex = alphabet.indexOf(char.toLowerCase());

    if (charIndex === -1) {
      // character not found in alphabet, preserve as is
      result += char;
    } else {
      const newIndex = (charIndex + shift) % alphabet.length;
      const newChar = alphabet[newIndex];
      result += isUpperCase ? newChar.toUpperCase() : newChar;
    }
  }
  return result;
}

export { capitalize, reverseString, calculator, caesarCipher };
