// ===============================
// Primitive Data Types
// ===============================

// 7 types:
// String, Number, Boolean, Null,
// Undefined, Symbol, BigInt

// JavaScript is dynamically typed

const score = 100;
console.log(score);
console.log(typeof score); // number

const scoreValue = 100.8;
console.log(scoreValue);
console.log(typeof scoreValue); // number

const isLoggedIn = false;
console.log(isLoggedIn);
console.log(typeof isLoggedIn); // boolean

const outsideTemp = null;
console.log(outsideTemp);
console.log(typeof outsideTemp); 
// object  <-- this is a famous JavaScript bug

let userEmail;
console.log(userEmail);
console.log(typeof userEmail); // undefined

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id == anotherId); // false
console.log(typeof id); // symbol
console.log(typeof anotherId); // symbol

const bigNumbers = 13456787324n;
console.log(bigNumbers);
console.log(typeof bigNumbers); // bigint


// ===============================
// Reference (Non-Primitive) Types
// ===============================

// Array
const heroes = ["shaktiman", "naagraj", "doga"];

console.log(heroes);
console.log(typeof heroes); // object


// Object
let myObj = {
    name: "hitesh",
    age: 22
};

console.log(myObj);
console.log(typeof myObj); // object


// Function
const myFunction = function () {
    console.log("hello world!");
};

console.log(myFunction);
console.log(typeof myFunction); // function

/// =====================================================
// Stack Memory & Heap Memory
// =====================================================

// Stack Memory:
// Used for Primitive Data Types
// A copy of the value is created

// Heap Memory:
// Used for Non-Primitive Data Types
// Original reference is shared



// =====================================================
// Primitive Example (Stack Memory)
// =====================================================

let myYoutubeName = "hiteshchoudharydotcom";

// Copy of value is assigned
let anotherName = myYoutubeName;

// Changing anotherName will NOT affect original value
anotherName = "chaiorcode";

console.log(myYoutubeName); // hiteshchoudharydotcom
console.log(anotherName);   // chaiorcode


// Notes:
// Primitive types:
// String, Number, Boolean, Null,
// Undefined, Symbol, BigInt

// In stack memory:
// each variable gets its own separate copy



// =====================================================
// Non-Primitive Example (Heap Memory)
// =====================================================

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
};



// Reference is assigned
// Both variables point to same object in heap memory
let userTwo = userOne;

// Changing value using userTwo
usertwo.email = "hitesh@google.com";

console.log(userOne.email); // hitesh@google.com
console.log(userTwo.email); // hitesh@google.com




// Notes:
// Non-Primitive types:
// Array, Object, Function

// In heap memory:
// variables store reference/address
// not actual data

// So changes from one variable
// affect the original object too



// =====================================================
// Easy Revision Trick
// =====================================================

// Primitive  -> Copy is made
// Non-Primitive -> Reference is shared


let arr = {
       email: "user@google.com",
    upi: "user@ybl"
}

