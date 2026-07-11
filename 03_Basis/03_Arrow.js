// ====================== THIS KEYWORD ====================== //


// object
const user = {
    username: "hitesh",
    price: 999,

    // object method
    welcomeMessage: function () {

        // 'this' refers to current object
        console.log(`${this.username}, welcome to website`);

        // prints current object
        console.log(this);
    }
}


// calling method
user.welcomeMessage()

// output:
// hitesh, welcome to website
// {
//   username: "hitesh",
//   price: 999,
//   welcomeMessage: [Function]
// }


// changing property
user.username = "sam"


// now 'this.username' becomes "sam"
user.welcomeMessage()

// output:
// sam, welcome to website


// ====================== GLOBAL THIS ====================== //


// In Browser
// console.log(this)
// output:
// Window Object

// In Node.js
console.log(this)
// output:
// {} (empty object)



// ====================== NORMAL FUNCTION ====================== //


function chai() {

    let username = "hitesh"

    // ⭐ IMPORTANT NOTE
    // 'this' inside a normal function
    // does NOT refer to local variables.
    console.log(this.username);
}

chai()

// output:
// undefined



// ====================== FUNCTION EXPRESSION ====================== //


// const chai = function () {
//
//     let username = "hitesh"
//
//     console.log(this.username);
// }
//
// chai()

// output:
// undefined



// ====================== ARROW FUNCTION ====================== //


// Arrow function
const chai = () => {

    let username = "hitesh"

    // ⭐ IMPORTANT NOTE
    // Arrow functions DO NOT have their own 'this'.
    // They inherit 'this' from their surrounding scope.
    console.log(this);
}

chai()

// Node.js output:
// {}

// Browser output:
// Window object



// ====================== ARROW FUNCTION SYNTAX ====================== //


// Explicit Return
const addOne = (num1, num2) => {
    return num1 + num2
}

console.log(addOne(3, 4))
// output:
// 7



// Implicit Return
// No need to write return keyword
const addTwo = (num1, num2) => num1 + num2

console.log(addTwo(3, 4))
// output:
// 7



// Implicit Return using ()
const addThree = (num1, num2) => (
    num1 + num2
)

console.log(addThree(3, 4))
// output:
// 7



// Returning Object
// ⭐ IMPORTANT NOTE
// Objects must be wrapped inside ()
const addObject = (num1, num2) => (
    { username: "hitesh" }
)

console.log(addObject())
// output:
// { username: "hitesh" }



// ====================== FOREACH ====================== //


// array
const myArray = [2, 5, 3, 7, 8]


// forEach executes callback for every element
myArray.forEach((item) => {
    console.log(item)
})

// output:
// 2
// 5
// 3
// 7
// 8



/*
====================== REVISION NOTES ======================

⭐ IMPORTANT NOTES

1.
this

Refers to current object.

Example:

const user = {
   name:"Hitesh",
   show(){
      console.log(this.name)
   }
}

2.
Inside Object

this.name
✅ Works

3.
Inside Normal Function

function demo(){
   console.log(this)
}

Works but 'this' is NOT local variables.

this.username
❌ undefined

4.
Arrow Function

const demo = () => {
   console.log(this)
}

Arrow functions DON'T have their own this.

5.
Difference

Normal Function
➡ Has its own this

Arrow Function
➡ Uses surrounding this

6.
Arrow Function Syntax

Explicit Return

const add = (a,b)=>{
   return a+b
}

Implicit Return

const add = (a,b)=> a+b

OR

const add = (a,b)=>(
   a+b
)

7.
Returning Object

❌ Wrong

const obj = ()=> {username:"hitesh"}

This is treated as a function body.

✅ Correct

const obj = ()=> (
   {username:"hitesh"}
)

8.
forEach()

Runs callback for every array element.

array.forEach((item)=>{
   console.log(item)
})

9.
Most Interview Question

Normal Function vs Arrow Function

Normal Function
✔ Own this
✔ Can be used as constructor
✔ Has arguments object

Arrow Function
✔ No own this
✔ Cannot be constructor
✔ No arguments object
*/