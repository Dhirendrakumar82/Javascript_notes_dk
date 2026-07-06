// # primitive data types (7):

// 1. String
// 2. number
// 3. bigint
// 4. boolean
// 5. undefined
// 6. symbol
// 7. null

const str = "Hello, World!";
const num = 42;
const bigIntNum = 9007199254740991n;
const bool = true;
let undef;
const sym = Symbol("unique");
const nullValue = null;

const Id= Symbol("123");
const otherId= Symbol("123");
// console.log(Id === otherId); //false
// console.log(Id == otherId); //false




// # reference (non-primitive) data types (1):
// 1. Object
// 2. Array
// 3. Function
// 4. Date
// 5. RegExp
// 6. Error
// 7. Map
// 8. Set


const heros =["spiderman", "ironman", "thor"];
// console.log(typeof heros); //object

let myobj = {
    name: "John",
    age: 30,
    isAdmin: true
};
// console.log(typeof myobj); //object

const myFunc = function() {
    console.log("Hello, World!");
};
// console.log(typeof myFunc); //function

// console.log(typeof bigIntNum); //bigint
// console.log(typeof nullValue); //object
 


// ++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (primitive values), Heap (reference values)

let myString = "Hello, World!";

let otherString = myString;
otherString = "Hello, Universe!";

console.log(myString); //Hello, World!
console.log(otherString); //Hello, Universe!

let user = {
    name: "John",
    age: 30,
    email: "john@example.com"

};

let usertwo = user;
usertwo.name = "NIKKU";

colsole.log(user.name); //NIKKU
console.log(usertow.name); //NIKKU



// # typeof operator
// console.log(typeof ""); //string
// console.log(typeof 1); //number
// console.log(typeof 1n); //bigint
// console.log(typeof true); //boolean
// console.log(typeof undefined); //undefined
// console.log(typeof Symbol()); //symbol
// console.log(typeof null); //object

// console.log(typeof {}); //object
// console.log(typeof []); //object
// console.log(typeof function(){}); //function

// # instanceof operator
// console.log([] instanceof Array); //true
// console.log([] instanceof Object); //true
// console.log({} instanceof Object); //true
// console.log(function(){} instanceof Function); //true    

// # null and undefined
// console.log(null == undefined); //true
// console.log(null === undefined); //false

// # NaN
// console.log(NaN == NaN); //false
// console.log(NaN === NaN); //false
// console.log(Number.isNaN(NaN)); //true

// # Infinity
// console.log(Infinity > 1); //true
// console.log(Infinity < 1); //false
// console.log(Infinity == Infinity); //true
// console.log(Infinity === Infinity); //true

// # -Infinity
// console.log(-Infinity > 1); //false
// console.log(-Infinity < 1); //true
// console.log(-Infinity == -Infinity); //true
// console.log(-Infinity === -Infinity); //true

// # 0 and -0
// console.log(0 == -0); //true
// console.log(0 === -0); //true
// console.log(1 / 0); //Infinity
// console.log(1 / -0); //-Infinity



