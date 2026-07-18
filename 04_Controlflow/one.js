// ====================== TRUTHY & FALSY VALUES ====================== //


// empty array
const userEmail = []


// ⭐ IMPORTANT NOTE
// Empty array ([]) is a TRUTHY value in JavaScript.
if (userEmail) {
    console.log("Got user email");
    // output:
    // Got user email
} else {
    console.log("Don't have user email");
}



// ====================== FALSY VALUES ====================== //

/*
There are only 8 Falsy Values in JavaScript

false
0
-0
0n (BigInt Zero)
"" (Empty String)
null
undefined
NaN
*/



// ====================== TRUTHY VALUES ====================== //

/*
Examples of Truthy Values

"0"
'false'
" " (String with space)
[]
{}
function(){}
*/



// ====================== CHECKING EMPTY ARRAY ====================== //


// ⭐ IMPORTANT NOTE
// Empty array is truthy,
// so check its length instead.

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

// output:
// Array is empty



// ====================== CHECKING EMPTY OBJECT ====================== //


const emptyObj = {}


// Object.keys() returns an array of object keys.
// If length is 0, object is empty.
if (Object.keys(emptyObj).length === 0) {

    console.log("Object is empty");
    // output:
    // Object is empty
}



// ====================== NULLISH COALESCING OPERATOR (??) ====================== //


// Works only with:
// null
// undefined

let val1;


// Returns first non-null and non-undefined value.

// val1 = 5 ?? 10
// output:
// 5


// val1 = null ?? 10
// output:
// 10


// val1 = undefined ?? 15
// output:
// 15


val1 = null ?? 10 ?? 20


console.log(val1);
// output:
// 10



// ====================== TERNARY OPERATOR ====================== //


// Syntax
// condition ? true : false

const iceTeaPrice = 100


iceTeaPrice <= 80
    ? console.log("less than 80")
    : console.log("more than 80");

// output:
// more than 80




/*
====================== REVISION NOTES ======================

⭐ IMPORTANT NOTES

1.
Truthy Values

Values treated as TRUE in if conditions.

Examples

"0"
"false"
" "
[]
{}
function(){}

2.
Falsy Values

Only 8 values are falsy.

false
0
-0
0n
""
null
undefined
NaN

3.
Empty Array

[]

✅ Truthy

Check using

array.length === 0

4.
Empty Object

{}

✅ Truthy

Check using

Object.keys(obj).length === 0

5.
Object.keys()

Returns an array of all keys.

Example

Object.keys(user)

Output

["name","age"]

6.
Nullish Coalescing Operator (??)

Returns first value that is NOT

null
undefined

Example

null ?? 10
Output → 10

undefined ?? 15
Output → 15

5 ?? 10
Output → 5

7.
Difference

||

Returns first truthy value.

??

Returns first non-null/non-undefined value.

Example

0 || 10
Output → 10

0 ?? 10
Output → 0

8.
Ternary Operator

Syntax

condition ? trueValue : falseValue

Example

age >= 18
? "Adult"
: "Minor"

9.
Most Interview Questions

[] == true
❌ False

if([])
✅ Executes because [] is Truthy

{} is also Truthy.

Empty Array and Empty Object
are NOT Falsy.
*/