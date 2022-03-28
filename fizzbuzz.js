// const fizzBuzz = () => {
//   for (let i = 1; i <= 50; i++){
//     if (i % 3 === 0 && i % 5 === 0) console.log(`Fizzbuzz result for ${i} is FizzBuzz`);
//     else if (i % 5 === 0) console.log(`Fizzbuzz result for ${i} is Buzz`);
//     else if (i % 3 === 0) console.log(`Fizzbuzz result for ${i} is Fizz`);
//     else console.log(`Fizzbuzz result for ${i} is ${i}`);
//   }
// }

// fizzBuzz()

const fizzBuzz = (number) => {
  
    if (number % 3 === 0 && number % 5 === 0) return 'FizzBuzz';
    else if (number % 5 === 0) return 'Buzz';
    else if (number % 3 === 0) return 'Fizz';
    else return number;
  }

for (let i = 1; i <= 50; i++){
  console.log(`FizzBuzz result for ${i} is ${fizzBuzz(i)}`)
};

module.exports = fizzBuzz;