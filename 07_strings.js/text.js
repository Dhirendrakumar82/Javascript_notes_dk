/* // # strings:
// Strings are used for storing and manipulating text. In JavaScript, strings are immutable, meaning that once a string is created,
//  it cannot be changed. However, you can create new strings based on existing ones.
// Strings can be created using single quotes (' '), double quotes (" "), or backticks (` `) for template literals.
// Example of creating strings:
let singleQuoteString = 'Hello, World!';
let doubleQuoteString = "Hello, World!";
let templateLiteralString = `Hello, World!`;

// Strings can be concatenated using the + operator or template literals.
let name = 'Alice';
let greeting = 'Hello, ' + name + '!'; // Using concatenation
let templateGreeting = `Hello, ${name}!`; // Using template literals

// Strings have various methods for manipulation, such as length, toUpperCase(), toLowerCase(), slice(), substring(), and more.
let str = 'JavaScript';
// console.log(str.length); // 10
// console.log(str.toUpperCase()); // JAVASCRIPT
// console.log(str.toLowerCase()); // javascript
// console.log(str.slice(0, 4)); // Java
// console.log(str.substring(4, 10)); // Script

// Strings can also be compared using comparison operators.
let str1 = 'apple';
let str2 = 'banana';
// console.log(str1 < str2); // true, because 'apple' comes before 'banana' in lexicographical order
// console.log(str1 === str2); // false, because the strings are not equal

// Strings can be split into arrays using the split() method and joined back together using the join() method.
let csv = 'red,green,blue';
let colorsArray = csv.split(','); // ['red', 'green', 'blue']
let joinedColors = colorsArray.join(','); // 'red,green,blue'

// Strings can also be searched using methods like indexOf(), includes(), startsWith(), and endsWith().
let sentence = 'The quick brown fox jumps over the lazy dog.';
// console.log(sentence.indexOf('fox')); // 16
// console.log(sentence.includes('lazy')); // true
// console.log(sentence.startsWith('The')); // true
// console.log(sentence.endsWith('dog.')); // true

// In summary, strings are a fundamental data type in JavaScript, and they provide a wide range of methods for manipulation and comparison. Understanding how to work with strings is essential for any JavaScript developer.   

// # Summary:
// - Strings are immutable sequences of characters used for storing and manipulating text.
// - They can be created using single quotes, double quotes, or backticks for template literals.
// - Strings can be concatenated using the + operator or template literals.
// - Various methods are available for string manipulation, such as length, toUpperCase(), toLowerCase(), slice(), substring(), split(), join(), indexOf(), includes(), startsWith(), and endsWith().
// - Strings can be compared using comparison operators.

// # Exercises:
// 1. Create a string variable called `myString` and assign it the value "Hello, JavaScript!".
// 2. Use the `toUpperCase()` method to convert `myString` to uppercase and log the result.
// 3. Use the `slice()` method to extract the word "JavaScript" from `myString` and log the result.
// 4. Check if `myString` includes the word "Hello" using the `includes()` method and log the result.
// 5. Split `myString` into an array of words using the `split()` method and log the result.
// 6. Join the array of words back into a single string using the `join()` method with a space as a separator and log the result.

// # Solutions:
// 1. Create a string variable called `myString` and assign it the value "Hello, JavaScript!".
let myString = "Hello, JavaScript!";

// 2. Use the `toUpperCase()` method to convert `myString` to uppercase and log the result.
// console.log(myString.toUpperCase()); // "HELLO, JAVASCRIPT!"

// 3. Use the `slice()` method to extract the word "JavaScript" from `myString` and log the result.
// console.log(myString.slice(7, 17)); // "JavaScript"

// 4. Check if `myString` includes the word "Hello" using the `includes()` method and log the result.
// console.log(myString.includes("Hello")); // true

// 5. Split `myString` into an array of words using the `split()` method and log the result.
let wordsArray = myString.split(' '); // ["Hello,", "Java
// console.log(wordsArray);

// 6. Join the array of words back into a single string using the `join()` method with a space as a separator and log the result.
let joinedString = wordsArray.join(' '); // "Hello, JavaScript!"
// console.log(joinedString);      

// # Conclusion:
// Strings are a fundamental part of JavaScript programming, and understanding how to create, manipulate, and compare them is essential for any developer. By mastering string methods and operations, you can effectively handle text data in your applications.  
// This concludes the section on strings in JavaScript.

*/

const name = "Dhirendra kumar";
const age = 24;
const city = "Moradabad";

// console.log(name + age  + city);
//console.log("My name is " + name + ", I am " + age + " years old, and I live in " + city + ".");
//console.log(`My name is ${name}, I am ${age} years old, and I live in ${city}.`);

const gamename = new String("Nikku");
// console.log(gamename[0]);
// console.log(gamename.__proto__);
// console.log(gamename.length);
// console.log(gamename.toUpperCase());
// console.log(gamename.toLowerCase());
// console.log(gamename.slice(0, 2));
// console.log(gamename.substring(0, 3));
// console.log(gamename.charAt(2));
// console.log(gamename.indexOf("k"));
// console.log(gamename.includes("k"));
// console.log(gamename.startsWith("N"));
// console.log(gamename.endsWith("u"));
// console.log(gamename.replace("Nikku", "dhirendra"));
// console.log(gamename.split("i"));



const newstring = gamename.substring(0,4)
// console.log(newstring);

const newstring2 = gamename.slice(-2,5)
// console.log(newstring2);

const newstring3 = "   Hello World    ";
// console.log(newstring3);
// console.log(newstring3.trim());

const url = "https://www.example.com/path/to/page?query=string#hash";
// console.log(url.replace('=',','));

//  console.log(url.includes('example')); // true
//  console.log(url.startsWith('https')); // true
//  console.log(url.endsWith('hash')); // true



const gamename2 = new String("Nikku-2-o");
// console.log(gamename2.split('-')); // ["Nikku", "2", "o"]
// console.log(gamename2.split('-').join(' ')); // "Nikku 2 o"

// console.log(gamename.concat(gamename2)); // "NikkuNikku-2-o"
// console.log(gamename.concat(" ", gamename2)); // "Nikku Nikku-2-o"
// console.log(gamename+" "+gamename2); // "Nikku Nikku-2-o"