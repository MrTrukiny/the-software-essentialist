import { fizzbuzz } from './fizzbuzz';

describe('Fizzbuzz', () => {
  it('Should outputs numbers as "strings", such as 1 as "1"', () => {
    const result = fizzbuzz(1);
    expect(typeof result).toBe('string');
  });

  it('Returns "Fizz" when the number is divisible by 3, such as 15', () => {
    const result = fizzbuzz(15);
    expect(result).toBe('Fizz');
  });

  it('Returns "Buzz" when the number is divisible by 5, such as 10', () => {
    const result = fizzbuzz(10);
    expect(result).toBe('Buzz');
  });
});
