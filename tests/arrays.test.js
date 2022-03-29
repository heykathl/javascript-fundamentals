
const array = require('../arrays')

describe('arrays', () => {

  test('add to array if length of array less than 5', () => {
    expect(array.addToBatch([1, 2, 3], 4)).toEqual([1, 2, 3, 4]);
  });

  test('does not add to array if length of array is greater than 5', () => {
    expect(array.addToBatch([1, 2, 3, 4, 5], 6)).not.toEqual([1, 2, 3, 4, 5, 6]);
  })

  test('returns true if the length of phone number is less than 10 characters', () => {
    expect(array.checkLength('123456789')).toEqual(true);
  });   

  test('returns false if the length of phone number is grater then 10 characters', () =>  {
    expect(array.checkLength('12345678910')).toEqual(false);
  });

  test('returns numbers that contain 10 chars or less', () => {
    expect(array.filterLongNumber(['123456789', '12345678910'])).toEqual(['123456789']);
  });

  test('returns an empty array when no values given', () => {
    expect(array.filterLongNumber([])).toEqual([]);
  });

  test('returns a message for a given name', () => {
    expect(array.generateMessages(['Jim'])).toEqual(['Hi Jim! 50% off our best candies for you today!']);
  });

  test('returns messages for given names', () => {
    expect(array.generateMessages(['Jim', 'John', 'Jeremy'])).toEqual([
      'Hi Jim! 50% off our best candies for you today!',
      'Hi John! 50% off our best candies for you today!',
      'Hi Jeremy! 50% off our best candies for you today!'
    ]);
  });
})