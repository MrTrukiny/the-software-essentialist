export const fizzbuzz = (num: number) => {
  if (isLessThan1OrGreaterThan100(num)) {
    throw new Error('Number must be greater than 0 and less than 100');
  }

  let result = num.toString();

  if (isDivisibleBy3(num)) result = 'Fizz';
  if (isDivisibleBy5(num)) result = 'Buzz';
  if (isDivisibleBy3And5(num)) result = 'FizzBuzz';

  return result;
};

function isDivisibleBy3(num: number) {
  return num % 3 === 0;
}

function isDivisibleBy5(num: number) {
  return num % 5 === 0;
}

function isDivisibleBy3And5(num: number) {
  return isDivisibleBy3(num) && isDivisibleBy5(num);
}

function isLessThan1OrGreaterThan100(num: number) {
  return num < 1 || num > 100;
}
