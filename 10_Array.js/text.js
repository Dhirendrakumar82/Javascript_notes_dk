/*

// # Array
// Arrays are used to store multiple values in a single variable. They can hold values of any type, including numbers, strings, objects, and even other arrays. Arrays are zero-indexed, meaning the first element is at index 0.

// # Array Creation
const myArray = [1, 2, 3, 4, 5];
const anotherArray = new Array(6, 7, 8, 9, 10);

// # Accessing Array Elements
console.log(myArray[0]); // 1
console.log(myArray[2]); // 3

// # Array Methods
myArray.push(6); // Adds an element to the end of the array
console.log(myArray); // [1, 2, 3, 4, 5, 6]

myArray.pop(); // Removes the last element from the array
console.log(myArray); // [1, 2, 3, 4, 5]

myArray.shift(); // Removes the first element from the array
console.log(myArray); // [2, 3, 4, 5]

myArray.unshift(0); // Adds an element to the beginning of the array
console.log(myArray); // [0, 2, 3, 4, 5]

const slicedArray = myArray.slice(1, 3); // Creates a new array from index 1 to 2
console.log(slicedArray); // [2, 3]

const splicedArray = myArray.splice(1, 2); // Removes 2 elements starting from index 1
console.log(splicedArray); // [2, 3]
console.log(myArray); // [0, 4, 5]

// # Array Iteration
myArray.forEach((element) => {
    console.log(element); // Logs each element in the array
});

// # Array Searching
const index = myArray.indexOf(4); // Finds the index of the element '4'
console.log(index); // 1

const includesElement = myArray.includes(5); // Checks if '5' is in the array
console.log(includesElement); // true

// # Array Transformation
const mappedArray = myArray.map((element) => element * 2); // Creates a new array with each element multiplied by 2
console.log(mappedArray); // [0, 8, 10]

const filteredArray = myArray.filter((element) => element > 3); // Creates a new array with elements greater than 3
console.log(filteredArray); // [4, 5]

// # Array Reduction
const sum = myArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0); // Sums all elements in the array
console.log(sum); // 9

// # Array Sorting
const sortedArray = myArray.sort((a, b) => a - b); // Sorts the array in ascending order
console.log(sortedArray); // [0, 4, 5]  

// # Array Reversal
const reversedArray = myArray.reverse(); // Reverses the array
console.log(reversedArray); // [5, 4, 0]

// Array Destructuring
const [first, second, ...rest] = myArray; // Destructures the array into variables
console.log(first); // 5
console.log(second); // 4
console.log(rest); // [0]

// # Array Validation
function isArray(arr) {
    return Array.isArray(arr); // Checks if the variable is an array
}

// # Array Flattening
const nestedArray = [1, [2, [3, [4]], 5]];
const flattenedArray = nestedArray.flat(2); // Flattens the array to a depth of 2
console.log(flattenedArray); // [1, 2, 3, [4], 5]

// # Array Copying
const copiedArray = [...myArray]; // Creates a shallow copy of the array using the spread operator
console.log(copiedArray); // [5, 4, 0]

// # Array Joining
const joinedString = myArray.join(', '); // Joins the array elements into a string separated by ', '
console.log(joinedString); // "5, 4, 0"

// # Array Finding
const foundElement = myArray.find((element) => element > 3); // Finds the first element greater than 3
console.log(foundElement); // 5

// # Array Some and Every
const hasLargeNumber = myArray.some((element) => element > 10); // Checks if any element is greater than 10
console.log(hasLargeNumber); // false

const allPositive = myArray.every((element) => element > 0); // Checks if all elements are positive
console.log(allPositive); // true   

// # Array Filling
const filledArray = new Array(5).fill(0); // Creates an array of length 5 filled with 0
console.log(filledArray); // [0, 0, 0, 0, 0]        

// # Array CopyWithin
const copyWithinArray = [1, 2, 3, 4, 5];
copyWithinArray.copyWithin(0, 3); // Copies elements starting from index 3 to the start of the array
console.log(copyWithinArray); // [4, 5, 3, 4, 5]    

// # Array Finding Index
const findIndex = myArray.findIndex((element) => element === 4); // Finds the index of the first element equal to 4
console.log(findIndex); // 1

// # Array Spreading
const spreadArray = [...myArray, 6, 7, 8]; // Creates a new array by spreading the elements of myArray and adding new elements
console.log(spreadArray); // [5, 4, 0, 6, 7, 8]

// # Array Iterators
const arrayIterator = myArray.entries();
for (const [index, value] of arrayIterator) {
    console.log(`Index: ${index}, Value: ${value}`); // Logs the index and value of each element in the array
}   

// # Array Copying with Slice
const slicedCopy = myArray.slice(); // Creates a shallow copy of the array using slice
console.log(slicedCopy); // [5, 4, 0]

// # Array Copying with Concat
const concatenatedArray = myArray.concat([6, 7, 8]); // Creates a new array by concatenating myArray with another array
console.log(concatenatedArray); // [5, 4, 0, 6, 7, 8]

// # Array Copying with Spread Operator
const spreadCopy = [...myArray]; // Creates a shallow copy of the array using the spread operator
console.log(spreadCopy); // [5, 4, 0]

// # Array Copying with Array.from
const fromCopy = Array.from(myArray); // Creates a shallow copy of the array using Array.from
console.log(fromCopy); // [5, 4, 0] 

// # Array Copying with Slice and Spread
const sliceSpreadCopy = [...myArray.slice()]; // Creates a shallow copy of the array using slice and spread operator
console.log(sliceSpreadCopy); // [5, 4, 0]  

// # Array Copying with Map
const mapCopy = myArray.map((element) => element); // Creates a shallow copy of the array using map
console.log(mapCopy); // [5, 4, 0]

// # Array Copying with Filter
const filterCopy = myArray.filter((element) => true); // Creates a shallow copy of the array using filter
console.log(filterCopy); // [5, 4, 0]

// # Array Copying with Reduce
const reduceCopy = myArray.reduce((accumulator, currentValue) => {
    accumulator.push(currentValue);
    return accumulator;
}, []); // Creates a shallow copy of the array using reduce
console.log(reduceCopy); // [5, 4, 0]   


// # Array Copying with forEach
const forEachCopy = [];
myArray.forEach((element) => {
    forEachCopy.push(element);
}); // Creates a shallow copy of the array using forEach
console.log(forEachCopy); // [5, 4, 0]

// # Array Copying with for...of
const forOfCopy = [];
for (const element of myArray) {
    forOfCopy.push(element);
} // Creates a shallow copy of the array using for...of
console.log(forOfCopy); // [5, 4, 0]

// # Array Copying with for...in
const forInCopy = [];   

for (const index in myArray) {
    forInCopy.push(myArray[index]);
} // Creates a shallow copy of the array using for...in
console.log(forInCopy); // [5, 4, 0]

// # Array Copying with while loop
const whileCopy = [];
let i = 0;
while (i < myArray.length) {
    whileCopy.push(myArray[i]);
    i++;
}// Creates a shallow copy of the array using while loop
console.log(whileCopy); // [5, 4, 0]

// # Array Copying with do...while loop
const doWhileCopy = [];
let j = 0;
do {
    doWhileCopy.push(myArray[j]);
    j++;
} while (j < myArray.length); // Creates a shallow copy of the array using do...while loop
console.log(doWhileCopy); // [5, 4, 0]  

// # Array Copying with for loop
const forLoopCopy = [];
for (let k = 0; k < myArray.length; k++) {
    forLoopCopy.push(myArray[k]);
} // Creates a shallow copy of the array using for loop
console.log(forLoopCopy); // [5, 4, 0]

// # Array Copying with recursion
function recursiveCopy(arr, index = 0, copy = []) {
    if (index >= arr.length) return copy;
    copy.push(arr[index]);
    return recursiveCopy(arr, index + 1, copy);
} // Creates a shallow copy of the array using recursion
const recursiveCopyArray = recursiveCopy(myArray);
console.log(recursiveCopyArray); // [5, 4, 0]

// # Array Copying with JSON
const jsonCopy = JSON.parse(JSON.stringify(myArray)); // Creates a deep copy of the array using JSON
console.log(jsonCopy); // [5, 4, 0]

// # Array Copying with structuredClone
const structuredCloneCopy = structuredClone(myArray); // Creates a deep copy of the array using structuredClone
console.log(structuredCloneCopy); // [5, 4, 0]      

// # Array Copying with lodash
// If you have lodash library installed, you can use _.cloneDeep to create a deep copy of the array
// const _ = require('lodash');
// const lodashCopy = _.cloneDeep(myArray);
// console.log(lodashCopy); // [5, 4, 0]

// # Array Copying with Ramda
// If you have Ramda library installed, you can use R.clone to create a deep copy of the array
// const R = require('ramda');
// const ramdaCopy = R.clone(myArray);
// console.log(ramdaCopy); // [5, 4, 0]

//  # Array Copying with Immutable.js
// If you have Immutable.js library installed, you can use Immutable.List to create a deep copy of the array
// const Immutable = require('immutable');
// const immutableCopy = Immutable.List(myArray).toArray();
// console.log(immutableCopy); // [5, 4, 0]

// # Array Copying with immer
// If you have immer library installed, you can use produce to create a deep copy of the array
// const { produce } = require('immer');
// const immerCopy = produce(myArray, draft => draft);
// console.log(immerCopy); // [5, 4, 0]
//
// # Array Copying with deepmerge
// If you have deepmerge library installed, you can use deepmerge to create a deep copy of the array
// const deepmerge = require('deepmerge');
// const deepmergeCopy = deepmerge([], myArray);
// console.log(deepmergeCopy); // [5, 4, 0]

// # Array Copying with clone-deep
// If you have clone-deep library installed, you can use cloneDeep to create a deep copy of the array
// const cloneDeep = require('clone-deep');
// const cloneDeepCopy = cloneDeep(myArray);
// console.log(cloneDeepCopy); // [5, 4, 0]

// # Array Copying with rfdc


*/ 


const myArr= [0, 1, 2, 3, 4,5]
const myHeros=["shaktiman", "naagraj"]
const myArr2= new Array(1, 2, 3, 4)

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop

//myArr.unshift(0)
// myArr.shift()

// console.log(myArr.includes(9))
// console.log(myArr.includes(4))

// console.log(myArr.indexOf(10))
// console.log(myArr.indexOf(1))

// const newArr = myArr.join()
// console.log(newArr);
// console.log(typeof newArr);

// console.log(myArr);


// slice, splice

//slice() is used to extract (copy) a portion of an array without changing the original array.

Definition

// splice() is used to:
// ✅ Remove elements
// ✅ Add elements
// ✅ Replace elements
// Unlike slice(), splice() modifies the original array.


// console.log("A", myArr);

// const myn1 = myArr.slice(1, 3)
// console.log(myn1);
// console.log("B", myArr);

// const myn2 = myArr.splice(1, 3)
// console.log("c", myArr);
// console.log(myn2);












