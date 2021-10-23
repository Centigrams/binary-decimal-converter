import '/src/style.css'

class Converter {
  static convertBinarytToDecimal(binary) {
    let number = parseInt(binary, 2);
    if (isNaN(number)) {
      return 'You need to input binary digits!';
    } else {
      return number;
    }
  };

  static convertDecimalToBinary(decimal) {
    return parseInt(decimal.toString(2));
  };
}

const form = (function() {
  const fromSelect = document.querySelector('[data-from]');
  const toSelect = document.querySelector('[data-to]');
  const numberInputFieldLabel = document.querySelector('[data-number-input-label]');
  const numberInputField = document.querySelector('[data-number-input-field]');
  const outputFieldLabel = document.querySelector('[data-output-type-label]');
  const outputField = document.querySelector('[data-output-field]');

  let conversionMode = 'binaryToDecimal';

  const changeLabelsInForm = () => {
    numberInputFieldLabel.textContent = `Enter ${fromSelect.value}`;
    outputFieldLabel.textContent = `${toSelect.value} Number`
  };

  const setConversionMode = () => {
    if (fromSelect.value === 'Binary' && toSelect.value === 'Decimal') {
      conversionMode = 'binaryToDecimal';
    } else if (fromSelect.value === 'Decimal' && toSelect.value === 'Binary') {
      conversionMode = 'decimalToBinary'
    }
  };
  
  const getSelectedChoices = () => {
    if (fromSelect.value === toSelect.value) {
      return;
    } else {
      changeLabelsInForm();
      setConversionMode();
    }
  };

  const convertInput = () => {
    const number = parseInt(numberInputField.value);
    let output;
    if (conversionMode === 'binaryToDecimal') {
      output = Converter.convertBinarytToDecimal(number);
      outputField.textContent = output;
    } else if (conversionMode === 'decimalToBinary') {
      output = Converter.convertDecimalToBinary(number);
      outputField.textContent = output;
    }
  };

  const swapConversion = () => {
    if (conversionMode === 'binaryToDecimal') {
      conversionMode = 'decimalToBinary';
      fromSelect.value = 'Decimal';
      toSelect.value = 'Binary';
      changeLabelsInForm();
    } else if (conversionMode === 'decimalToBinary') {
      conversionMode = 'binaryToDecimal';
      fromSelect.value = 'Binary';
      toSelect.value = 'Decimal';
      changeLabelsInForm();
    }
  };

  const resetInputAndOutputFields = () => {
    outputField.textContent = '';
    numberInputField.value = '';
  };

  return {
    getSelectedChoices,
    convertInput,
    resetInputAndOutputFields,
    swapConversion,
  };
}());
document.getElementById('convert-button').addEventListener('click', form.convertInput);
document.getElementById('reset-button').addEventListener('click', form.resetInputAndOutputFields);
document.getElementById('swap-button').addEventListener('click', form.swapConversion);
document.getElementById('from-select').addEventListener('click', form.getSelectedChoices);
document.getElementById('to-select').addEventListener('click', form.getSelectedChoices);
form.getSelectedChoices();