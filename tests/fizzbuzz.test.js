const fizzbuzz = require('../fizzbuzz');

describe ('fizzbuzz', () => {
  test('return fizzbuzz when number is divisible by 3 and 5', () => {
    expect(fizzbuzz(15)).toBe('FizzBuzz');
  });

  test('return fizz when number is divisible by 3', () => {
    expect(fizzbuzz(9)).toBe('Fizz');
  });

  test('return buzz when number is divisible by 5', () => {
    expect(fizzbuzz(5)).toBe('Buzz');
  });

  test('return number when is not divisible by 3 or 5', () => {
    expect(fizzbuzz(1)).toBe(1);
  }); 
});