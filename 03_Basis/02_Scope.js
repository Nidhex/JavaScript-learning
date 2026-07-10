// ====================== SCOPE ====================== //





// var has function scope
// let and const have block scope

// var c = 300
let a = 300

if (true) {

    // different variable from outer 'a'
    let a = 10

    // block scoped
    const b = 20

    // ⭐ IMPORTANT NOTE
    // var ignores block scope
    // c is accessible outside the if block
    var c = 30

    console.log("INNER", a)
    // output:
    // INNER 10
}


// outer variable remains unchanged
console.log(a)
// output:
// 300


// b is block scoped
// console.log(b)
// ❌ ReferenceError


// var is accessible outside block
console.log(c)
// output:
// 30



// ====================== NESTED FUNCTIONS ====================== //


function one() {

    const username = "hitesh"

    function two() {

        const website = "youtube"

        // inner function can access outer variables
        console.log(username)
        // output:
        // hitesh
    }

    // outer function cannot access inner variables
    // console.log(website)
    // ❌ ReferenceError

    two()
}

one()



// ====================== NESTED BLOCK SCOPE ====================== //


if (true) {

    const username = "hitesh"

    if (username === "hitesh") {

        const website = " youtube"

        // inner block can access outer block variable
        console.log(username + website)

        // output:
        // hitesh youtube
    }

    // website exists only inside inner if block
    // console.log(website)
    // ❌ ReferenceError
}


// username exists only inside if block
// console.log(username)
// ❌ ReferenceError



// ====================== HOISTING ====================== //


// ⭐ IMPORTANT NOTE
// Function Declaration is hoisted
// It can be called before its definition

console.log(addone(5))
// output:
// 6


function addone(num) {
    return num + 1
}



// ⭐ IMPORTANT NOTE
// Function Expression is NOT hoisted like declarations.
// addtwo is a const variable.
// It cannot be used before initialization.

//    addtwo(5)
// ❌ ReferenceError:
// Cannot access 'addtwo' before initialization


const addtwo = function (num) {
    return num + 2
}



/*
====================== REVISION NOTES ======================

⭐ IMPORTANT NOTES

1.
Scope
Determines where a variable can be accessed.

2.
Global Scope

const a = 10

Accessible everywhere.

3.
Block Scope

if(true){
   let a = 10
}

let and const stay inside the block.

4.
Function Scope

Variables created inside a function
exist only inside that function.

5.
var

var ignores block scope.

Example:

if(true){
   var x = 10;
}

console.log(x)
✅ Works

6.
let / const

if(true){
   let x = 10;
}

console.log(x)
❌ Error

7.
Nested Function

Inner function can access
outer function variables.

Outer function CANNOT access
inner function variables.

8.
Nested Block

Inner block can access
outer block variables.

Outer block CANNOT access
inner block variables.

9.
Hoisting

JavaScript moves declarations
to the top before execution.

10.
Function Declaration

demo()

function demo(){}

✅ Can call before declaration.

11.
Function Expression

const demo = function(){}

❌ Cannot call before declaration.

12.
Difference

Function Declaration
➡ Hoisted

Function Expression
➡ Not hoisted

13.
Most Interview Question

var
✔ Function Scope
✔ Redeclaration allowed
✔ Hoisted (initialized with undefined)

let
✔ Block Scope
✔ Cannot redeclare
✔ Hoisted but in Temporal Dead Zone (TDZ)

const
✔ Block Scope
✔ Cannot redeclare
✔ Value cannot be reassigned
✔ Hoisted but in TDZ
*/