import { validateNumber, validateStringNotEmpty } from "./validation";

export function transformToNumber(value) {
  return +value;
}

export const cleanNumbers = (input) => {
  const numbers = [];
  for (const num of input) {
    validateStringNotEmpty(num);
    const number = transformToNumber(num);
    validateNumber(number);
    numbers.push(number);
  }
  return numbers
}