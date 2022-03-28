const { expect } = require("@jest/globals");
// const { test } = require("picomatch");
const add = require("../add")

describe ('add', () => {
  
  test('adds 2 and 2', () => {
    expect(add(2, 2)).toBe(4);
  });
  
  test('add 0 and 5', () => {
    expect(add(0, 5)).toBe(5);
  });

});