
/*
// # date
const myDate = new Date();
// console.log(myDate); // Mon Mar 13 2023 10:30:45 GMT+0530 (India Standard Time)
// console.log(myDate.toString()); // Mon Mar 13 2023 10:30:45 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString()); // Mon Mar 13 2023
// console.log(myDate.toISOString()); // 2023-03-13T05:00:45.000Z
// console.log(myDate.toLocaleDateString()); // 13/3/2023
// console.log(myDate.toLocaleTimeString()); // 10:30:45 AM
// console.log(myDate.toLocaleString()); // 13/3/2023, 10:30:45 AM

// # Date Methods
// console.log(myDate.getFullYear()); // 2023
// console.log(myDate.getMonth()); // 2 (March, as months are zero-indexed)
// console.log(myDate.getDate()); // 13
// console.log(myDate.getDay()); // 1 (Monday, as days are zero-indexed)
// console.log(myDate.getHours()); // 10
// console.log(myDate.getMinutes()); // 30
// console.log(myDate.getSeconds()); // 45
// console.log(myDate.getMilliseconds()); // 0
// console.log(myDate.getTime()); // 1678687845000 (milliseconds since January 1, 1970)
// console.log(myDate.getTimezoneOffset()); // -330 (minutes offset from UTC)

// # Date Setters
myDate.setFullYear(2024);
myDate.setMonth(5); // June (months are zero-indexed)
myDate.setDate(15);
myDate.setHours(12);
myDate.setMinutes(45);
myDate.setSeconds(30);
//console.log(myDate.toString()); // Sat Jun 15 2024 12:45:30 GMT+0530 (India Standard Time)      

// # Date Parsing
const dateString = "2023-03-13T10:30:45";
const parsedDate = new Date(dateString);
//console.log(parsedDate.toString()); // Mon Mar 13 2023 10:30:45 GMT+0530 (India Standard Time)

// # Date Comparison
const date1 = new Date("2023-03-13T10:30:45");
const date2 = new Date("2024-06-15T12:45:30");
// console.log(date1 < date2); // true
// console.log(date1 > date2); // false
// console.log(date1.getTime() === date2.getTime()); // false  

// # Date Arithmetic
const date3 = new Date("2023-03-13T10:30:45");
date3.setDate(date3.getDate() + 5); // Add 5 days
//console.log(date3.toString()); // Sat Mar 18 2023 10:30:45 GMT+0530 (India Standard Time)

const date4 = new Date("2023-03-13T10:30:45");
date4.setMonth(date4.getMonth() - 2); // Subtract 2 months
//console.log(date4.toString()); // Mon Jan 13 2023 10:30:45 GMT+0530 (India Standard Time)

// # Date Formatting
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
// console.log(myDate.toLocaleDateString('en-US', options)); // Saturday, June 15, 2024        

// # Date Validation
function isValidDate(d) {
    return d instanceof Date && !isNaN(d);
}
const validDate = new Date("2023-03-13T10:30:45");
const invalidDate = new Date("invalid date string");
// console.log(isValidDate(validDate)); // true
// console.log(isValidDate(invalidDate)); // false 

// # Date Difference
const startDate = new Date("2023-03-13T10:30:45");
const endDate = new Date("2024-06-15T12:45:30");
const differenceInMilliseconds = endDate - startDate;
const differenceInDays = differenceInMilliseconds / (1000 * 60 * 60 * 24);
// console.log(differenceInDays); // 458.0833333333333 

// # Date Formatting with Intl.DateTimeFormat
const formatter = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
// console.log(formatter.format(myDate)); // June 15, 2024

// # Date Formatting with Moment.js (if using Moment.js library)
// const moment = require('moment');
// console.log(moment(myDate).format('MMMM Do YYYY, h:mm:ss a')); // June 15th 2024, 12:45:30 pm
// Note: Moment.js is a third-party library and needs to be installed separately.

//date notes:
// The Date object in JavaScript is used to work with dates and times. It provides various methods to create, manipulate, and format dates. The Date object can be created using the `new Date()` constructor, which can take different parameters such as a date string, timestamp, or individual date components (year, month, day, etc.).
// The Date object has methods to get and set various components of the date, such as year, month, day, hours, minutes, seconds, and milliseconds. It also provides methods for formatting dates into different string representations and for comparing dates.

//let me know if you want me to explain any specific part of the code or if you have any questions about working with dates in JavaScript!

*/

let myDate = new Date();
// console.log(myDate); // Current date and time
// console.log(myDate.toString()); // String representation of the date
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toLocaleString());

// console.log(typeof myDate); // object

let myCreatedDate = new Date("2023,1,23");
//console.log(myCreatedDate); // Invalid Date
//console.log(myCreatedDate.toDateString()); // Invalid Date

let myCreatedDate2 = new Date("01-12-2023 12:30:45");
//console.log(myCreatedDate2); // Thu Jan 12 2023 12:30:45 GMT+0530 (India Standard Time)
//console.log(myCreatedDate2.toDateString()); // Thu Jan 12 2023

let myTimeStamp = Date.now();
//console.log(myTimeStamp); // Current timestamp in milliseconds

//console.log(myCreatedDate2.getTime()); //   Timestamp of the created date in milliseconds

//console.log(Math.floor(Date.now()/1000)); // Current timestamp in seconds

let newDate = new Date();
// console.log(newDate.getMonth() + 1); // Current month (1-12, where 1 is January and 12 is December)
// console.log(newDate.getFullYear()); // Current year
// console.log(newDate.getDate()); // Current day of the month (1-31)
// console.log(newDate.getDay()); // Current day of the week (0-6, where 0 is Sunday and 6 is Saturday)

//`${newDate.getDate()}/${newDate.getMonth() + 1}/${newDate.getFullYear()}`; // Current date in DD/MM/YYYY format
console.log(
  newDate.toLocaleDateString('default', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
);
// Output Example: Monday, January 1, 2023
Explan