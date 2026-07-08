// const tinderUser = new Object()
const tinderUser ={}

tinderUser.id = "123abc"
tinderUser.name = "Dhirendra"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser ={
    email: "dhir123@gmail.com",
    fullname:{
        userfullname:{
            firstname: "Dhirendra",
            lastname: "Kumar",
        }
    }
}

// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname);
// console.log(regularUser.fullname.userfullname.firstname);

 
const obj2 ={3: "c", 4:"d"}
const obj4 ={5: "e", 6:"f"}

// const obj3 ={ obj1, obj2}
//const obj3 = Object.assign({}, obj1 , obj2, obj4)

const obj3 = {...obj1, ...obj2, ...obj4}

// console.log(obj3);

const users = [
    {
        id:1,
        email:"nikku1@gmail.com"
    },
     {
        id:2,
        email:"nikku2@gmail.com"
    },
     {
        id:3,
        email:"nikku3@gmail.com"
    }
]

// console.log(users[1].email);
users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));

console.log(Object.entries(tinderUser));


console.log(tinderUser.hasOwnProperty('isLoggedIn'));
