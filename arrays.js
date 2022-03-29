const arrays = {
  addToBatch: (array, number) => {
    return array.length >= 5 ? array : array.concat(number);
  },
  checkLength: function(phoneNumber) {
    if (phoneNumber.length <= 10) return true;
    return false;
  },

  filterLongNumber: function(phoneNumbers) {
    // const filteredNumbers = [];

    // for (let i = 0; i < phoneNumbers.length; i++) {
    //   if (this.checkLength(phoneNumbers[i])) filteredNumbers.push(phoneNumbers[i]);
    // }
    // return filteredNumbers;

    // Using Filter
    return phoneNumbers.filter(this.checkLength)
  }
};

module.exports = arrays