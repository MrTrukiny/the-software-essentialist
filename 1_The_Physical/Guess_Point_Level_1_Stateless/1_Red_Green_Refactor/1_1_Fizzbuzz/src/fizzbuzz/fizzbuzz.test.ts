import { fizzbuzz } from './fizzbuzz';

describe('Fizzbuzz', () => {
  it('Should outputs numbers as "strings", such as 1 as "1"', () => {
    const result = fizzbuzz(1);
    expect(typeof result).toBe('string');
  });
});
