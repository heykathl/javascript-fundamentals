// const person = {
//   name: 'Maxine',
//   age: 32,
//   address: {
//     city: 'London',
//     postcode: 'E1 123'
//   },
//   hobbies: ['writing', 'tennis', 'cooking']
// };

// console.log(person.address.city);
// console.log(person.hobbies[1]);

// const generateMessages = (namesAndDiscounts) => {
//   return namesAndDiscounts.map(name, discount => {
//     return `Hi ${namesAndDiscount.name}! ${namesAndDiscount.discount} off our best candies for you today!`
//   }); 
// }

const namesAndDiscounts = [
  { name: 'Anna', discount: 50 },
  { name: 'Laura', discount: 40 },
  { name: 'Josh', discount: 30 },
  { name: 'Min', discount: 50 },
  { name: 'Karla', discount: 60 }
];

// const generateMessages = namesAndDiscounts.map(item => {
//   return `Hi ${item.name}! ${item.discount}% off our best candies for you today!`
// });

const generateMessages = (namesAndDiscounts) => {
  return namesAndDiscounts.map(item => {
    return `Hi ${item.name}! ${item.discount}% off our best candies for you today!`
})};

console.log(generateMessages(namesAndDiscounts));

module.exports = {
  generateMessages
};
