const objects = require('../objects')

describe("generate messages", () => {

  test('generates personalized messages with name and discount', () => {
    const person = [{ name: 'Anna', discount: 50 }]
    expect(objects.generateMessages(person)).toEqual(['Hi Anna! 50% off our best candies for you today!']);
  });
});