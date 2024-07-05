// Conversion logic
function convertValue(value, convertFrom, convertTo) {
  value = value.trim(); // Remove leading/trailing whitespace

  // Check if the input value is appropriate for the selected mode
  if (!isValidValue(value, convertFrom)) {
    return 'Invalid input value';
  }

  let result = '';

  if (convertFrom === 'decimal') {
    switch (convertTo) {
      case 'binary':
        result = decimalToBinary(value);
        break;
      case 'excess-3':
        result = decimalToExcess3(value);
        break;
      case 'gray':
        result = decimalToGray(value);
        break;
      case 'octal':
        result = decimalToOctal(value);
        break;
      case 'hexadecimal':
        result = decimalToHexadecimal(value);
        break;
      default:
        result = value;
    }
  } else if (convertFrom === 'binary') {
    // Check if the input value is a valid binary number
    if (!isValidBinary(value)) {
      return 'Invalid binary value';
    }
    switch (convertTo) {
      case 'decimal':
        result = binaryToDecimal(value);
        break;
      case 'excess-3':
        result = binaryToExcess3(value);
        break;
      case 'gray':
        result = binaryToGray(value);
        break;
      case 'octal':
        result = binaryToOctal(value);
        break;
      case 'hexadecimal':
        result = binaryToHexadecimal(value);
        break;
      default:
        result = value;
    }
  } else if (convertFrom === 'excess-3') {
    // Check if the input value is a valid excess-3 code
    if (!isValidBinary(value)) {
      return 'Invalid excess-3 code value';
    }
    switch (convertTo) {
      case 'decimal':
        result = excess3ToDecimal(value);
        break;
      case 'binary':
        result = excess3ToBinary(value);
        break;
      case 'gray':
        result = excess3ToGray(value);
        break;
      case 'octal':
        result = excess3ToOctal(value);
        break;
      case 'hexadecimal':
        result = excess3ToHexadecimal(value);
        break;
      default:
        result = value;
    }
  } else if (convertFrom === 'gray') {
    // Check if the input value is a valid gray code
    if (!isValidBinary(value)) {
      return 'Invalid gray code value';
    }
    switch (convertTo) {
      case 'decimal':
        result = grayToDecimal(value);
        break;
      case 'binary':
        result = grayToBinary(value);
        break;
      case 'excess-3':
        result = grayToExcess3(value);
        break;
      case 'octal':
        result = grayToOctal(value);
        break;
      case 'hexadecimal':
        result = grayToHexadecimal(value);
        break;
      default:
        result = value;
    }
  } else if (convertFrom === 'octal') {
    // Check if the input value is a valid octal number
    if (!isValidOctal(value)) {
      return 'Invalid octal value';
    }
    switch (convertTo) {
      case 'decimal':
        result = octalToDecimal(value);
        break;
      case 'binary':
        result = octalToBinary(value);
        break;
      case 'excess-3':
        result = octalToExcess3(value);
        break;
      case 'gray':
        result = octalToGray(value);
        break;
      case 'hexadecimal':
        result = octalToHexadecimal(value);
        break;
      default:
        result = value;
    }
  } else if (convertFrom === 'hexadecimal') {
    // Check if the input value is a valid hexadecimal number
    if (!isValidHexadecimal(value)) {
      return 'Invalid hexadecimal value';
    }
    switch (convertTo) {
      case 'decimal':
        result = hexadecimalToDecimal(value);
        break;
      case 'binary':
        result = hexadecimalToBinary(value);
        break;
      case 'excess-3':
        result = hexadecimalToExcess3(value);
        break;
      case 'gray':
        result = hexadecimalToGray(value);
        break;
      case 'octal':
        result = hexadecimalToOctal(value);
        break;
      default:
        result = value;
    }
  }

  return result;
}

// Check if the input value is a valid binary number
function isValidBinary(value) {
  return /^[01]+$/.test(value);
}

// Check if the input value is a valid octal number
function isValidOctal(value) {
  return /^[0-7]+$/.test(value);
}

// Check if the input value is a valid hexadecimal number
function isValidHexadecimal(value) {
  return /^[0-9A-Fa-f]+$/.test(value);
}

// Check if the input value is appropriate for the selected mode
function isValidValue(value, convertFrom) {
  if (convertFrom === 'binary') {
    return isValidBinary(value);
  } else if (convertFrom === 'octal') {
    return isValidOctal(value);
  } else if (convertFrom === 'hexadecimal') {
    return isValidHexadecimal(value);
  }
  return true;
}

// Get the necessary elements
const convertBtn = document.getElementById('convert-btn');
const eraseBtn = document.getElementById('erase-btn');
const resultDiv = document.getElementById('result');
const valueTextarea = document.getElementById('value');
const convertFromSelect = document.getElementById('convert-from');
const convertToSelect = document.getElementById('convert-to');

// Add event listeners
convertBtn.addEventListener('click', () => {
  const value = valueTextarea.value.trim();
  const convertFrom = convertFromSelect.value;
  const convertTo = convertToSelect.value;
  const convertedValue = convertValue(value, convertFrom, convertTo);
  resultDiv.textContent = convertedValue;
  showResultPopup(convertedValue);
});

eraseBtn.addEventListener('click', () => {
  valueTextarea.value = '';
  resultDiv.textContent = '';
});

// Decimal to Binary conversion
function decimalToBinary(value) {
  return parseInt(value, 10).toString(2);
}

// Decimal to Excess-3 conversion
function decimalToExcess3(value) {
  const decimalValue = parseInt(value, 10);
  const excess3Value = (decimalValue + 3).toString(2);
  return excess3Value;
}

// Decimal to Gray code conversion
function decimalToGray(value) {
  const decimalValue = parseInt(value, 10);
  const grayValue = (decimalValue ^ (decimalValue >> 1)).toString(2);
  return grayValue;
}

// Decimal to Octal conversion
function decimalToOctal(value) {
  return parseInt(value, 10).toString(8);
}

// Decimal to Hexadecimal conversion
function decimalToHexadecimal(value) {
  return parseInt(value, 10).toString(16).toUpperCase();
}

// Binary to Decimal conversion
function binaryToDecimal(value) {
  return parseInt(value, 2).toString(10);
}

// Binary to Excess-3 conversion
function binaryToExcess3(value) {
  const decimalValue = parseInt(value, 2);
  const excess3Value = decimalToExcess3(decimalValue.toString());
  return excess3Value;
}

// Binary to Gray code conversion
function binaryToGray(value) {
  const grayValue = (parseInt(value, 2) ^ (parseInt(value, 2) >> 1)).toString(2);
  return grayValue;
}

// Binary to Octal conversion
function binaryToOctal(value) {
  const decimalValue = parseInt(value, 2);
  const octalValue = decimalToOctal(decimalValue.toString());
  return octalValue;
}

// Binary to Hexadecimal conversion
function binaryToHexadecimal(value) {
  const decimalValue = parseInt(value, 2);
  const hexadecimalValue = decimalToHexadecimal(decimalValue.toString());
  return hexadecimalValue;
}

// Excess-3 to Decimal conversion
function excess3ToDecimal(value) {
  const binaryValue = excess3ToBinary(value);
  const decimalValue = binaryToDecimal(binaryValue);
  return decimalValue;
}

// Excess-3 to Binary conversion
function excess3ToBinary(value) {
  const decimalValue = excess3ToDecimal(value);
  const binaryValue = decimalToBinary(decimalValue.toString());
  return binaryValue;
}

// Excess-3 to Gray code conversion
function excess3ToGray(value) {
  const binaryValue = excess3ToBinary(value);
  const grayValue = binaryToGray(binaryValue);
  return grayValue;
}

// Excess-3 to Octal conversion
function excess3ToOctal(value) {
  const decimalValue = excess3ToDecimal(value);
  const octalValue = decimalToOctal(decimalValue.toString());
  return octalValue;
}

// Excess-3 to Hexadecimal conversion
function excess3ToHexadecimal(value) {
  const decimalValue = excess3ToDecimal(value);
  const hexadecimalValue = decimalToHexadecimal(decimalValue.toString());
  return hexadecimalValue;
}

// Gray code to Decimal conversion
function grayToDecimal(value) {
  const binaryValue = grayToBinary(value);
  const decimalValue = binaryToDecimal(binaryValue);
  return decimalValue;
}

// Gray code to Binary conversion
function grayToBinary(value) {
  let binaryValue = '';
  binaryValue += value[0];
  for (let i = 1; i < value.length; i++) {
    binaryValue += (parseInt(value[i]) ^ parseInt(binaryValue[i - 1])).toString();
  }
  return binaryValue;
}

// Gray code to Excess-3 conversion
function grayToExcess3(value) {
  const binaryValue = grayToBinary(value);
  const excess3Value = binaryToExcess3(binaryValue);
  return excess3Value;
}

// Gray code to Octal conversion
function grayToOctal(value) {
  const binaryValue = grayToBinary(value);
  const octalValue = binaryToOctal(binaryValue);
  return octalValue;
}

// Gray code to Hexadecimal conversion
function grayToHexadecimal(value) {
  const binaryValue = grayToBinary(value);
  const hexadecimalValue = binaryToHexadecimal(binaryValue);
  return hexadecimalValue;
}

// Octal to Decimal conversion
function octalToDecimal(value) {
  return parseInt(value, 8).toString(10);
}

// Octal to Binary conversion
function octalToBinary(value) {
  const decimalValue = parseInt(value, 8);
  const binaryValue = decimalToBinary(decimalValue.toString());
  return binaryValue;
}

// Octal to Excess-3 conversion
function octalToExcess3(value) {
  const binaryValue = octalToBinary(value);
  const excess3Value = binaryToExcess3(binaryValue);
  return excess3Value;
}

// Octal to Gray code conversion
function octalToGray(value) {
  const binaryValue = octalToBinary(value);
  const grayValue = binaryToGray(binaryValue);
  return grayValue;
}

// Octal to Hexadecimal conversion
function octalToHexadecimal(value) {
  const decimalValue = octalToDecimal(value);
  const hexadecimalValue = decimalToHexadecimal(decimalValue.toString());
  return hexadecimalValue;
}

// Hexadecimal to Decimal conversion
function hexadecimalToDecimal(value) {
  return parseInt(value, 16).toString(10);
}

// Hexadecimal to Binary conversion
function hexadecimalToBinary(value) {
  const decimalValue = hexadecimalToDecimal(value);
  const binaryValue = decimalToBinary(decimalValue.toString());
  return binaryValue;
}

// Hexadecimal to Excess-3 conversion
function hexadecimalToExcess3(value) {
  const binaryValue = hexadecimalToBinary(value);
  const excess3Value = binaryToExcess3(binaryValue);
  return excess3Value;
}

// Hexadecimal to Gray code conversion
function hexadecimalToGray(value) {
  const binaryValue = hexadecimalToBinary(value);
  const grayValue = binaryToGray(binaryValue);
  return grayValue;
}

// Hexadecimal to Octal conversion
function hexadecimalToOctal(value) {
  const decimalValue = hexadecimalToDecimal(value);
  const octalValue = decimalToOctal(decimalValue.toString());
  return octalValue;
}


function addToWorkspace(value) {
  workspace.textContent += value;
}

function clearWorkspace() {
  workspace.textContent = "";
}

function calculate() {
  let result;
  try {
    result = eval(workspace.textContent);
  } catch (error) {
    result = "Error";
  }
  workspace.textContent = result;
}

