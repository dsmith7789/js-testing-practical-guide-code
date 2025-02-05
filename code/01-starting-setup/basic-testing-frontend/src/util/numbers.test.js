import { it, expect } from 'vitest';
import { transformToNumber } from './numbers';

it('should give a numeric output given a valid string', () => {
    const num = '5';
    const result = transformToNumber(num);
    expect(result).toBeTypeOf("number");
});

it('should transform a string representation of a number to its numeric equivalent', () => {
    const num = '5';
    const trueResult = +num;
    const result = transformToNumber(num);
    expect(result).toBe(trueResult);
});

it('should handle string representations of negative numbers', () => {
    const num = '-5';
    const trueResult = +num;
    const result = transformToNumber(num);
    expect(result).toBe(trueResult);
});

it('should return NaN when given a non-numeric string', () => {
    const nan = 'hello';
    const result = transformToNumber(nan);
    expect(result).toBeNaN();
});