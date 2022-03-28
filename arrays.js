const addToBatch = (array, number) => {
  return array.length > 5 ? array : array.concat(number);
}
console.log(addToBatch([1, 2], 10));

