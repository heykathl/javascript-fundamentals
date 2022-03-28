
const array = require('../arrays')

describe('arrays', () => {

  test('add to array if length of array less than 5', () => {
    expect(array.addToBatch([1, 2, 3], 4)).toEqual([1, 2, 3, 4]);
  });

  test('does not add to array if length of array is greater than 5', () => {
    expect(array.addToBatch([1, 2, 3, 4, 5], 6)).not.toEqual([1, 2, 3, 4, 5, 6]);
  })
})