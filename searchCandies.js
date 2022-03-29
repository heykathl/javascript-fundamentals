const searchCandies = (letters, price) => {
  return candies = [
    { name: 'Aero', price: 1.99 },
    { name: 'Skitties', price: 2.99 },
    { name: 'Mars', price: 1.49 },
    { name: 'Maltesers', price: 3.49 },
    { name: 'Skittles', price: 1.49 },
    { name: 'Starburst', price: 5.99 },
    { name: 'Ricola', price: 1.99 },
    { name: 'Polkagris', price: 5.99 },
    { name: 'Pastila', price: 4.99 },
    { name: 'Mentos', price: 8.99 },
    { name: 'Raffaello', price: 7.99 },
    { name: 'Gummi bears', price: 10.99 },
    { name: 'Fraise Tagada', price: 5.99 }
  ]
    .filter(item => item.price <= price )
    .filter(item => item.name.toLowerCase().startsWith(letters.toLowerCase()))
    .map(item => {
      return item.name
    })
}

console.log(searchCandies('Ma', 4));

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const isEvenNumber = (number) => {
  return number % 2 === 0;
}

const evenNumbers = numbers.filter(item => isEvenNumber(item));
console.log(evenNumbers);

module.exports = {
  searchCandies
};