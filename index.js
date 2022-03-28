// console.log('Hello there');

// FUNCTIONS
// const printMessage = _ => console.log('hello');
// const printMessage2 = () => console.log('hello');

// const printMessage3 = function(){
//   console.log('hello');}

// function printMessage4(params) {
//   console.log(params);
// }

// const sayHello = (name) => {
//   return `hello ${name}`;
// }

// console.log(sayHello('Jim'));

// const add = (a, b) => {
//   return a + b;
// }
// const add2 = (a, b) =>  a + b;

// const multiple = (a, b) => {
//   return a * b;
// }

// console.log(multiple(2, add(2, 4)));

// console.log(sayHello())

/*
Multiple line comments
*/

// CONDITIONALS
// === compares data types as well
// const getNumberSign = (number) => {
//   if (number === 0){
//     return "zero";
//   } else if (number >= 1) {
//       return "positive";
//   } else {
//       return "negative";
//   }
// }

// const getNumberSign2 = (number) => {
//   if (number === 0) return "zero";
//   else if (number >= 1) return "positive";
//   else return "negative";
// }
// console.log(getNumberSign(0));

// const isValidLength = (phoneNumber) => {
//   const validLength = 10;
//   if (phoneNumber.length === validLength) return true;
//   else return false;
// }

// console.log(isValidLength('1234567891'));


// Passing functions into functions
// const notifyByEmail = (email) => {
//   return `Email sent to ${email}`;
// }

// const notifyByText = (phoneNumber) => {
//   return `Text sent to ${phoneNumber};`
// }

// const notify = (contact) => {
//   return contact;
// }

// console.log(notify(notifyByEmail('sam@example.com')));
// console.log(notify(notifyByText('123456780')));

const notifyByEmail = (email) => {
  return `Email sent to ${email}`;
}

const notifyByText = (phoneNumber) => {
  return `Text sent to ${phoneNumber};`
}

const notify = (emailOrPhone, notifyFunction) => {
  return notifyFunction(emailOrPhone);
}

console.log(notify('sam@example.com', notifyByEmail));