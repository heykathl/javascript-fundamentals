const candyStore = require('../searchCandies');

describe('searchCandies', () => {

  test('filter candies by maximum £2 and the given letters', () => {
    expect(candyStore.searchCandies('Ma', 2)).toEqual(['Mars'])
  });

  test('when there are no matching candies', () => {
    expect(candyStore.searchCandies('Xy', 12)).toEqual([])
  });

  test ('when letters are in lower case', () => {
    expect(candyStore.searchCandies('ma', 4)).toEqual(['Mars', 'Maltesers'])
  })
}); 
