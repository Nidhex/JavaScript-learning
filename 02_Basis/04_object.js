// ====================== OBJECTS ====================== //


// creates an empty object using constructor
// const tinderuser = new Object()

// creates an empty object using object literal
// ⭐ NOTE:
// {} is the most commonly used way.
const tinderuser = {}


// adding properties dynamically
tinderuser.id = "123abc"
tinderuser.name = "sammy"
tinderuser.isloggedin = false


// console.log(tinderuser);



// ====================== NESTED OBJECT ====================== //


const regularuser = {
    email: "some@gmail.com",

    fullname: {
        userfullname: {
            firstname: "nidhish",
            lastname: "vaishnav"
        }
    }
}


// accessing nested object
console.log(regularuser.fullname)
// output:
// { userfullname: { firstname: 'nidhish', lastname: 'vaishnav' } }


// accessing deeper nested object
console.log(regularuser.fullname.userfullname)
// output:
// { firstname: 'nidhish', lastname: 'vaishnav' }



// ====================== MERGING OBJECTS ====================== //


const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }


// This creates an object containing two objects
// NOT a merged object
// const obj3 = { obj1, obj2 }
// output:
// {
//   obj1:{1:"a",2:"b"},
//   obj2:{3:"a",4:"b"}
// }


// Object.assign(target, source1, source2)
// {} is target object
// const obj3 = Object.assign({}, obj1, obj2)


// ⭐ MOST COMMON METHOD
// Spread operator merges objects
const obj3 = { ...obj1, ...obj2 }

console.log(obj3)
// output:
// {1:"a",2:"b",3:"a",4:"b"}



// ====================== ARRAY OF OBJECTS ====================== //


// array containing multiple objects
const user = [
    {
        id: 1,
        email: "nids@gmail.com"
    },
    {
        id: 1,
        email: "nids@gmail.com"
    },
    {
        id: 1,
        email: "nids@gmail.com"
    },
    {
        id: 1,
        email: "nids@gmail.com"
    },
    {
        id: 1,
        email: "nids@gmail.com"
    }
]


// accessing first object's email
user[0].email
// output: "nids@gmail.com"



console.log(tinderuser)
// output:
// {
//   id:"123abc",
//   name:"sammy",
//   isloggedin:false
// }



// ====================== OBJECT METHODS ====================== //


// returns array of all keys
console.log(Object.keys(tinderuser))
// output:
// ["id","name","isloggedin"]


// returns array of all values
console.log(Object.values(tinderuser))
// output:
// ["123abc","sammy",false]


// returns array of key-value pairs
console.log(Object.entries(tinderuser))
// output:
// [
//   ["id","123abc"],
//   ["name","sammy"],
//   ["isloggedin",false]
// ]


// checks whether property exists
console.log(tinderuser.hasOwnProperty('isloggedin'))
// output: true



// ====================== OBJECT DESTRUCTURING ====================== //


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesth"
}


// normal access
// course.courseInstructor


// ⭐ IMPORTANT NOTE
// Object Destructuring
// Extract property into variable

const { courseInstructor: instructor } = course

// same as:
// const instructor = course.courseInstructor


console.log(instructor)
// output: "hitesth"



/*
====================== REVISION NOTES ======================

⭐ IMPORTANT NOTES

1.
const obj = {}
Most common way to create object.

2.
const obj = new Object()
Creates singleton object.

3.
Nested Object
obj.a.b.c

4.
Merge Objects

Object.assign({}, obj1, obj2)

OR (Most Used)

{ ...obj1, ...obj2 }

5.
Array of Objects

const users = [
   {id:1},
   {id:2}
]

Access:
users[0].id

6.
Object.keys(obj)
Returns array of keys.

7.
Object.values(obj)
Returns array of values.

8.
Object.entries(obj)
Returns array of [key,value].

9.
hasOwnProperty()

Checks if property exists.

10.
Object Destructuring

const { courseInstructor } = course

Rename variable

const { courseInstructor: instructor } = course

11.
Spread Operator (...)

Used to merge arrays and objects.

12.
Difference

{ obj1, obj2 }
❌ Creates nested object

{ ...obj1, ...obj2 }
✅ Merges objects
*/