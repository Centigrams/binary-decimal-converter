import '/src/style.css'

class Converter {
  static convertBinarytToDecimal(binary) {
    return parseInt(binary, 2);
  };

  static convertDecimalToBinary(decimal) {
    return parseInt(decimal.toString(2));
  };
}

const form = (function() {
    const fromSelect = document.querySelector('[data-from]');
    const toSelect = document.querySelector('[data-to]');
    const numberInputField = document.querySelector('[data-number-input-field]')
    const convertButton = document.querySelector('#convert-button');
    const clearButton = document.querySelector('#reset-button');
    const swapButton = document.querySelector('#swap-button');
    const outputField = document.querySelector('output-field');

    /**
     * Get selected choices
     * Check if selected choices are same
     * Check if selected choice are not same
     * If the selected choices are not the same continue
     * 
     * If selected choice is binary to decimal
     * Check if input field only contains 0 and 1
     * If input fields contain other characters, return
     * Else convert
     * 
     * If selected chocie is decimal to binary
     * 
     */

    return {

    };
}());
// document.getElementById('convert-button').addEventListener('click', convertInput);
// document.getElementById('reset-button').addEventListener('click', resetInputField);
// document.getElementById('swap-button').addEventListener('click', swapConversion);