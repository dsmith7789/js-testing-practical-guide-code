import { it, expect, describe } from 'vitest';
import { validateStringNotEmpty, validateNumber } from './validation';

// describe() just helps us group tests related to a function/unit in the output
describe('validateStringNotEmpty()', () => {
    it('should throw an error when an empty string is given as input', () => {
        const emptyString = '';
        const resultFn = () => {
            validateStringNotEmpty(emptyString);
        }
        expect(resultFn).toThrow(/Invalid input - must not be empty./);
    });
});

describe('validateNumber()', () => {
    it('should throw an error when non-numeric string is given as input', () => {
        const nonNumeric = 'hello';
        const resultFn = () => {
            validateNumber(nonNumeric);
        }
        expect(resultFn).toThrow(/Invalid number input./);
    });
    
    it('should not throw any errors when given a numeric string', () => {
        const validString = '23';
        const notEmptyFn = () => {
            validateStringNotEmpty(validString);
        }
        const isNumberFn = () => {
            validateNumber(validString);
        }
        expect(notEmptyFn).not.toThrow();
        expect(isNumberFn).not.toThrow();
    });
    
    it('should throw an invalid string error when given a non-numeric string input', () => {
        const invalid = 'hello';
        const notEmptyFn = () => {
            validateStringNotEmpty(invalid);
        }
        const isNumberFn = () => {
            validateNumber(invalid);
        }
        expect(notEmptyFn).not.toThrow();
        expect(isNumberFn).toThrow(/Invalid number input./);
    });
});