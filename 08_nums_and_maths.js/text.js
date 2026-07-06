
/*
// # numbers and maths
// This file contains the code for the numbers and maths section of the course.
// It includes examples of basic arithmetic operations, number types, and mathematical functions in JavaScript.
// It also demonstrates how to use the Math object for more complex calculations.

// ## Basic Arithmetic Operations
// JavaScript supports the following basic arithmetic operations:
// Addition (+), Subtraction (-), Multiplication (*), Division (/), and Modulus (%).

let a = 10;
let b = 3;

console.log("Addition: " + (a + b)); // 13
console.log("Subtraction: " + (a - b)); // 7
console.log("Multiplication: " + (a * b)); // 30
console.log("Division: " + (a / b)); // 3.333...
console.log("Modulus: " + (a % b)); // 1

// ## Number Types
// JavaScript has a single number type, which is a double-precision 64-bit binary format IEEE 754 value.
// This means that all numbers in JavaScript are floating-point numbers.

let integerNum = 42; // Integer
let floatNum = 3.14; // Floating-point number

console.log("Integer: " + integerNum); // 42
console.log("Floating-point: " + floatNum); // 3.14

// ## Mathematical Functions
// The Math object provides properties and methods for mathematical constants and functions.

console.log("Math.PI: " + Math.PI); // 3.141592653589793
console.log("Math.sqrt(16): " + Math.sqrt(16)); // 4
console.log("Math.pow(2, 3): " + Math.pow(2, 3)); // 8
console.log("Math.abs(-5): " + Math.abs(-5)); // 5
console.log("Math.floor(4.7): " + Math.floor(4.7)); // 4
console.log("Math.ceil(4.1): " + Math.ceil(4.1)); // 5
console.log("Math.round(4.5): " + Math.round(4.5)); // 5

// ## Random Numbers
// You can generate random numbers using Math.random(), which returns a floating-point number between 0 (inclusive) and 1 (exclusive).

let randomNum = Math.random();
console.log("Random Number: " + randomNum);

// To get a random integer within a specific range, you can use the following function:
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log("Random Integer between 1 and 10: " + getRandomInt(1, 10));

// ## Conclusion
// This section covered the basics of numbers and mathematical operations in JavaScript. 
// You learned about arithmetic operations, number types, mathematical functions, and generating random numbers. 
// With this knowledge, you can perform various calculations and work with numbers effectively in your JavaScript programs.

// End of numbers and maths section

// Note: This code is intended for educational purposes and may not cover all edge cases or best practices in production code.


// # Additional Resources
// For more information on numbers and mathematics in JavaScript, you can refer to the following resources:
// - [MDN Web Docs: Numbers](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
// - [MDN Web Docs: Math](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)
// - [JavaScript.info: Numbers](https://javascript.info/number)

// # Exercises
// 1. Write a function that takes two numbers as arguments and returns their sum.
// 2. Write a function that takes a number and returns its square root.
// 3. Write a function that generates a random integer between two given numbers (inclusive).
// 4. Write a function that takes an array of numbers and returns the maximum value.
// 5. Write a function that takes an array of numbers and returns the average value.

// # Solutions
// You can find solutions to the exercises in the solutions.js file.
*/
// =======================nums====================

const score = 100;
// console.log("Your score is: " + score);

const  balance = new Number(250.75);
// console.log("Your balance is: " + balance);

// console.log(balance.toFixed(2)); // 250.75
// console.log(balance.toPrecision(4)); // 250.8
// console.log(balance.toExponential(2)); // 2.51e+2
// console.log(balance.toString()); // "250.75"
// console.log(balance.toString().length); // 6
// console.log(balance.valueOf()); // 250.75
// console.log(balance.toLocaleString('en-US', { style: 'currency', currency: 'USD' })); // "$250.75"


const otherNumber = 123.456789;
// console.log(otherNumber.toFixed(2)); // 123.46
//console.log(otherNumber.toPrecision(4)); // 123.46
// console.log(otherNumber.toExponential(3)); // 1.235e+2
// console.log(otherNumber.toString()); // "123.456789"
// console.log(otherNumber.toString().length); // 10
// console.log(otherNumber.valueOf()); // 123.456789
// console.log(otherNumber.toLocaleString('de-DE')); // "123,457"

const hundred = 100000000;
//console.log(hundred.toLocaleString('en-IN')); 


//======= Maths============

// console.log(Math);
// console.log(Math.PI); // 3.141592653589793
// console.log(Math.E); // 2.718281828459045
// console.log(Math.SQRT2); // 1.4142135623730951
// console.log(Math.SQRT1_2); // 0.7071067811865476
// console.log(Math.LN2); // 0.6931471805599453
// console.log(Math.LN10); // 2.302585092994046
// console.log(Math.LOG2E); // 1.4426950408889634
// console.log(Math.LOG10E); // 0.4342944819032518 

// console.log(Math.abs(-10)); // 10
// console.log(Math.ceil(4.2)); // 5
// console.log(Math.floor(4.8)); // 4
// console.log(Math.round(4.5)); // 5
// console.log(Math.max(1, 2, 3, 4, 5)); // 5
// console.log(Math.min(1, 2, 3, 4, 5)); // 1
// console.log(Math.pow(2, 3)); // 8
// console.log(Math.sqrt(16)); // 4
// console.log(Math.random()); // Random number between 0 and 1
// console.log(Math.random() * 10); // Random number between 0 and 10
// console.log(Math.random() * 10 + 1); // Random number between 1 and 11
// console.log((Math.random() * 10) + 1); // Random number between 1 and 11
// console.log(Math.floor(Math.random() * 10)); // Random integer between 0 and 9
// console.log(Math.floor(Math.random() * 10) + 1); // Random integer between 1 and 10
 

const min = 10;
const max = 20;
const randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomInt); // Random integer between 10 and 20

