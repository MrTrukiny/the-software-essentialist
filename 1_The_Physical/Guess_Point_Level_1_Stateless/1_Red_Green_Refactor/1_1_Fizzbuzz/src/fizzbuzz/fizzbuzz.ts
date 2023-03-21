export const fizzbuzz = (num: number) => {
  if (num < 1) throw new Error('Number must be greater than 0');
  let result = num.toString();

  if (num % 3 === 0) result = 'Fizz';
  if (num % 5 === 0) result = 'Buzz';
  if (num % 3 === 0 && num % 5 === 0) result = 'FizzBuzz';

  return result;
};
