const arrays = {
  addToBatch: (array, number) => {
    return array.length >= 5 ? array : array.concat(number);
  },
  checkLength: (phoneNumber) => {
    if (phoneNumber.length <= 10) return true;
  },
};

module.exports = arrays
// const filterLongNumbers = (phoneNumbers) => {

// }