import { it, expect, describe } from 'vitest';

import { cleanNumbers, transformToNumber } from './numbers';

describe('transformToNumber()', () => {
  it('should transform a string number to a number of type number', () => {
    const input = '1';
  
    const result = transformToNumber(input);
  
    expect(result).toBeTypeOf('number');
  });
  
  it('should transform a string number to a number of type number', () => {
    const input = '1';
  
    const result = transformToNumber(input);
  
    expect(result).toBe(+input);
  });
  
  it('should yield NaN for non-transformable values', () => {
    const input = 'invalid';
    const input2 = {};
  
    const result = transformToNumber(input);
    const result2 = transformToNumber(input2);
  
    expect(result).toBeNaN();
    expect(result2).toBeNaN();
  });
});

describe('cleanNumbers()', () => {
  it('should return an array of numbers if an array of string numbers is provided', () => {
    const strNums = ['1', '2']
    const cleanedNumbers = cleanNumbers(strNums);
    expect(cleanedNumbers[0]).toBeTypeOf('number');
  });

  it('should throw an error if an array with at least one empty string is provided', () => {
    const strNums = ['', '1'];
    const cleanFn = () => {
      cleanNumbers(strNums);
    };
    expect(cleanFn).toThrow();
  });
});