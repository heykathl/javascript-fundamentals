const fizzBuzz = () => {
  for (let i = 1; i <= 50; i++){
    if (i % 3 === 0 && i % 5 === 0) console.log(`Fizzbuzz result for ${i} is FizzBuzz`);
    else if (i % 5 === 0) console.log(`Fizzbuzz result for ${i} is Buzz`);
    else if (i % 3 === 0) console.log(`Fizzbuzz result for ${i} is Fizz`);
    else console.log(`Fizzbuzz result for ${i} is ${i}`);
  }
}

fizzBuzz()