// ====================== FUNCTIONS ====================== //


// Function Definition
// Number1 and Number2 are PARAMETERS
// function addtwonumbers(Number1, Number2) {
//     console.log(Number1 + Number2);
// }

// Function Call
// 3 and 4 are ARGUMENTS

// addtwonumbers(3,4)      // output: 7
// addtwonumbers(3,"4")    // output: 34 (Number + String = String)
// addtwonumbers(3,"a")    // output: 3a
// addtwonumbers(3,null)   // output: 3 (null is treated as 0)



// ====================== RETURN ====================== //


// function returns value instead of printing it
function addtwonumbers(Number1, Number2) {

    return Number1 + Number2;
}


// storing returned value
const result = addtwonumbers(3, 5)

console.log("Result:", result)
// output: Result: 8



// ====================== DEFAULT PARAMETERS ====================== //


// if no value is passed,
// username will become "sam"
function loginuserMassage(username = "sam") {

    // ⭐ NOTE:
    // This condition only works when username is undefined.
    // Since default value is "sam", this block will NEVER run
    // unless default parameter is removed.

    if (username === undefined) {
        console.log("please enter a username");
        return
    }

    return `${username} just logged in`
}

console.log(loginuserMassage("nids... "))
// output:
// nids... just logged in


// if called without argument
// console.log(loginuserMassage())
// output:
// sam just logged in



// ====================== REST OPERATOR (...) ====================== //


// collects all arguments into an array
function calculatecarprice(...num1) {
    return num1
}

console.log(calculatecarprice(200, 400, 500))
// output:
// [200,400,500]



// first two values go into val1 and val2
// remaining values go into num1 array
function calculatecarpric(val1, val2, ...num1) {
    return num1
}

console.log(calculatecarpric(200, 400, 500, 2000))
// output:
// [500,2000]



// ====================== PASSING OBJECT TO FUNCTION ====================== //


const user = {
    username: "hitesh",
    price: 199
}


// function accepts object as parameter
function handleobject(anyobject) {

    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}


// passing object variable
// handleobject(user)


// passing object directly
handleobject({
    username: "sam",
    price: 399
})
// output:
// Username is sam and price is 399



// ====================== PASSING ARRAY TO FUNCTION ====================== //


const mynewarray = [200, 400, 100, 600]


// function returns second element
function returnsecondvalue(getarray) {
    return getarray[1];
}


// passing array variable
// console.log(returnsecondvalue(mynewarray))
// output:
// 400


// passing array directly
console.log(returnsecondvalue([200, 400, 500, 2000]))
// output:
// 400



/*
====================== REVISION NOTES ======================

⭐ IMPORTANT NOTES

1.
Function Definition

function demo(a, b){
    return a + b;
}

2.
Function Call

demo(10,20)

3.
Parameters
Variables written in function definition.

function demo(a,b)

4.
Arguments
Actual values passed during function call.

demo(10,20)

5.
return
Returns value from function.
Function stops immediately after return.

6.
console.log() vs return

console.log()
➡ Prints value

return
➡ Sends value back to caller

7.
Default Parameter

function login(username = "Sam")

Used when no argument is passed.

8.
Rest Operator (...)

function demo(...nums)

Collects all arguments into an array.

9.
Mixed Parameters

function demo(a,b,...nums)

a → first value
b → second value
nums → remaining values

10.
Passing Object

function demo(obj){
   console.log(obj.name)
}

11.
Passing Array

function demo(arr){
   return arr[1]
}

12.
Objects and arrays can be passed
directly or through variables.
*/