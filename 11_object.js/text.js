/*

// # Object
// Objects are collections of key-value pairs. They are useful for modeling real-world items and grouping related data together.

// # Object Creation
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    isEmployed: true,
    hobbies: ['reading', 'traveling', 'coding'],
    address: {
        street: '123 Main St',
        city: 'Cityville',
        zip: '12345',
    },
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
};

// # Accessing Properties
console.log(person.firstName); // John
console.log(person['lastName']); // Doe
console.log(person.address.city); // Cityville

// # Adding / Updating Properties
person.email = 'john.doe@example.com';
person.age = 31;
console.log(person.email); // john.doe@example.com
console.log(person.age); // 31

// # Deleting Properties
delete person.isEmployed;
console.log(person.isEmployed); // undefined

// # Checking Properties
console.log('age' in person); // true
console.log(person.hasOwnProperty('email')); // true

// # Iterating Over Properties
for (const key in person) {
    if (person.hasOwnProperty(key)) {
        console.log(`${key}: ${person[key]}`);
    }
}

// # Object Methods
console.log(person.fullName()); // John Doe

// # Object.keys / Object.values / Object.entries
const keys = Object.keys(person);
const values = Object.values(person);
const entries = Object.entries(person);
console.log(keys); // [ 'firstName', 'lastName', 'age', 'hobbies', 'address', 'fullName', 'email' ]
console.log(values);
console.log(entries);

// # Merging Objects
const defaults = {
    country: 'USA',
    language: 'English',
};
const user = Object.assign({}, defaults, person);
console.log(user.country); // USA

const merged = {
    ...defaults,
    ...person,
};
console.log(merged.language); // English

// # Object Destructuring
const { firstName, lastName, address: { city }, hobbies } = person;
console.log(firstName); // John
console.log(city); // Cityville
console.log(hobbies[0]); // reading

// # Nested Objects
console.log(person.address.street); // 123 Main St

// # Object Freeze / Seal
const config = {
    apiUrl: 'https://api.example.com',
};
Object.freeze(config);
config.apiUrl = 'https://api.changed.com';
console.log(config.apiUrl); // https://api.example.com

const settings = {
    theme: 'dark',
};
Object.seal(settings);
settings.theme = 'light';
settings.newProp = 'value';
console.log(settings);

// # Comparing Objects
const a = { name: 'Alice' };
const b = { name: 'Alice' };
console.log(a === b); // false
console.log(JSON.stringify(a) === JSON.stringify(b)); // true

// # Copying Objects
const shallowCopy = { ...person };
shallowCopy.firstName = 'Jane';
console.log(person.firstName); // John
console.log(shallowCopy.firstName); // Jane

// # Deep Copy Example
const deepCopy = JSON.parse(JSON.stringify(person));
deepCopy.address.city = 'New City';
console.log(person.address.city); // Cityville
console.log(deepCopy.address.city); // New City

// # JSON Conversion
const jsonString = JSON.stringify(person);
const parsedPerson = JSON.parse(jsonString);
console.log(jsonString);
console.log(parsedPerson);

// # Nested Object Access with Optional Chaining
console.log(person.address?.street); // 123 Main St
console.log(person.job?.title); // undefined

// # Default Values with Nullish Coalescing
const jobTitle = person.job?.title ?? 'No job title';
console.log(jobTitle); // No job title

// # Common Object Utilities
const clone = Object.create(person);
console.log(clone.fullName()); // John Doe

*/

// object literals

const mysym = Symbol("key1")

const jsUser = {
    name: "nikku",
    [mysym] : "mykey",
    age:24,
    location:"moradabad",
    email:"nikku123@gmail.com",
    isLoggedIn:false,
    lastLogginDays:["monday", "saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);

// console.log(jsUser.mysym);
// console.log(jsUser[mysym]);

jsUser.email= "dhir123@gmail.com"
// Object.freeze(jsUser)
jsUser.email= "dhir123@gmail.com"

// console.log(jsUser);

// console.log(jsUser.lastLogginDays[1]);

jsUser.greeting = function(){
    console.log("hello js user");
    
}

jsUser.greeting2= function(){
    console.log(`Hello JS user ,${this.name}`);
    
}
console.log(jsUser.greeting());
console.log(jsUser.greeting2());





