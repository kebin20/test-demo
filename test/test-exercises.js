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

// analyze array
function analyzeArray(arr) {
  const sum = arr.reduce((a, b) => a + b, 0); // sum all the elements in the array
  const average = sum / arr.length; // calculate the average
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const length = arr.length;

  return { average, min, max, length };
}

export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };
