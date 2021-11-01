// single line comment

/**
 * multi line comment
 *
 * the single = in programming is called the assignment operator
 */

// alert('Hello world');

/******* VARIABLES *******/
// var name; //decalared a variable
// name = 'Favour'; //variable assignment
// var name = 'John Doe';

// console.log(name);
// let age;
// let age = 10;
// let age = 20 age is already decleared
// console.log(age);
// const gender;
// const genotype = 'O';
// genotype = 'A';
// console.log(genotype);

// let numberOne = '10';
// let if = 'one';

/**======= STRINGS ======== */
let mySelf = 'I am a boy';
let name = 'Favour';
console.log(mySelf);

let x;
x = undefined;

let chicken = true;
chicken = null;

let myName = 'John Doe';
let hobby = 'coding, dancing, cooking';
let description = 'I am a person that is living';

//concatenation
console.log('My name is ' + myName + ' I like ' + hobby + ' ' + description);
//string interpolation or template literals
console.log(`My name is ${myName} I like ${hobby} ${description}`);

// let news = "Ronaldo's goal was awesome"
// let news = 'Ronaldo\'s goal was awesome'
// // let todaysQuote = '"Programming is awesome" - Mark Zuckerberg'
// let todaysQuote = " \"Programming is awesome\" - Mark Zuckerberg"

//Number or arithmetic operations
let numberOne = 10_000_000;
console.log(numberOne);

let testcalc = 9 * 1 - 2 + 4;
let a = 3 * 3; //3 time 3
let a2 = 3 ** 3; //3 raise to power 3
let b = 5;
// console.log(b++);
console.log(b);
console.log(a2);
console.log(testcalc);
// console.log(6 / 3);
// console.log(6 % 5);

let strNum = '10';
let convert1 = strNum * 1;
let convert2 = parseInt(strNum);
let convert3 = Number(strNum);
console.log(10 + convert1);
// console.log(2 * '8');

console.log(4 <= 3);
console.log(3 <= 3);

//soft equality
console.log(3 == 3);
console.log(3 == '3');

//strict equality
console.log(3 === 3);
console.log(3 === '3');

// console.log(4 > 3);

//inequality
console.log(!false);
//soft inequality
console.log(1 != 1);
console.log(1 != '1');
//strict inequality
console.log(1 !== '1');

let isDeveloper = true,
  knowHtml = true,
  isAccountant = false,
  knowBookKeeping = false;

console.log(isDeveloper && isAccountant);
console.log(isDeveloper && knowBookKeeping);
console.log(isDeveloper && knowHtml);

console.log(isDeveloper || knowHtml);

console.log('======LOGICAL AND OPERATOR====');
console.log(false && false);
console.log(false && true);
console.log(true && false);
console.log(true && true);

console.log('======LOGICAL OR OPERATOR====');
console.log(false || false);
console.log(false || true);
console.log(true || false);
console.log(true || true);

let q = 'Word';
let l = 10;
let c;
console.log(typeof q);
console.log(typeof l);
console.log(typeof c);
