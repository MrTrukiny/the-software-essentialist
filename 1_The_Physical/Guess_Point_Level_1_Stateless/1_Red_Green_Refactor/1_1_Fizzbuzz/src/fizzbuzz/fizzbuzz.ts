export const fizzbuzz = (num: number) => {
  let result = num.toString();

  if (num % 3 === 0) {
    result = 'Fizz';
  } else if (num % 5 === 0) {
    result = 'Buzz';
  }

  return result;
};
