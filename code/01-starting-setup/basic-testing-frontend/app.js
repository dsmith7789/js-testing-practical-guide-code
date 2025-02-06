import { extractEnteredNumberValues } from './src/parser.js';
import { calculateResult } from './src/math.js';
import { deriveResultText, outputResultText } from './src/output.js';

const form = document.querySelector('form');

function formSubmitHandler(event) {
  event.preventDefault();
  
  const numberInputs = extractEnteredNumberValues(form);
  const result = calculateResult(numberInputs);
  const resultText = deriveResultText(result);

  outputResultText(resultText);
}

form.addEventListener('submit', formSubmitHandler);
