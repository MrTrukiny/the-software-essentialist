import { fizzbuzz } from './fizzbuzz';

describe('Fizzbuzz', () => {
  it('Should outputs numbers as "strings", such as 1 as "1"', () => {
    const result = fizzbuzz(1);
    expect(typeof result).toBe('string');
  });

  it('Returns "Fizz" when the number is divisible by 3, such as 6', () => {
    const result = fizzbuzz(6);
    expect(result).toBe('Fizz');
  });

  it('Returns "Buzz" when the number is divisible by 5, such as 10', () => {
    const result = fizzbuzz(10);
    expect(result).toBe('Buzz');
  });

  it('Returns "FizzBuzz" when the number is divisible by 3 and 5, such as 15', () => {
    const result = fizzbuzz(15);
    expect(result).toBe('FizzBuzz');
  });

  it('Returns the number as a string when the number is not divisible by 3 or 5, such as 7', () => {
    const result = fizzbuzz(7);
    expect(result).toBe('7');
  });

  it('Throws an error when the number is lower than 1', () => {
    expect(() => fizzbuzz(0)).toThrowError(
      'Number must be greater than 0 and less than 100'
    );
  });

  it('Throws an error when the number is greater than 100', () => {
    expect(() => fizzbuzz(101)).toThrowError(
      'Number must be greater than 0 and less than 100'
    );
  });
});
