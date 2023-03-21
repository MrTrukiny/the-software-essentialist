export const fizzbuzz = (num: number) => {
  let result = num.toString();

  if (num % 3 === 0) result = 'Fizz';

  return result;
};
