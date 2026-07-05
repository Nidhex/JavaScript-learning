// simple number variable
const score = 400


// Number object
const balance = new Number(100)


// prints Number object
console.log(balance)          // output: [Number: 100]


// converts number to string and checks length
console.log(balance.toString().length)   // output: 3


// toFixed(n) gives fixed decimal values
console.log(balance.toFixed(2))          // output: 100.00


// decimal number
const otherNumber = 123.4567


// toPrecision() returns number with total significant digits
console.log(otherNumber.toPrecision(3))  // output: 123


// large number
const hundreads = 1000000


// converts number into Indian number system format
console.log(hundreads.toLocaleString('en-IN'))   // output: 10,00,000



/// ====================== MATHS =============================== ///


// gives all Math properties and functions
console.log(Math)             // output: Math Object


// abs() converts negative to positive
console.log(Math.abs(-4))     // output: 4


// round() rounds to nearest integer
console.log(Math.round(4.3))  // output: 4


// ceil() always rounds UP
console.log(Math.ceil(4.2))   // output: 5


// floor() always rounds DOWN
console.log(Math.floor(4.2))  // output: 4


// returns minimum value
console.log(Math.min(1, 23, 5, 6))   // output: 1


// returns maximum value
console.log(Math.max(1, 23, 5, 6))   // output: 23


// random() gives random value between 0 and 1
console.log(Math.random())    // output: random decimal number


// random number between 1 and 10
console.log((Math.random() * 10) + 1)   // output: random number from 1 to 10


const min = 10
const max = 20


// random integer between min and max
// formula:
// Math.random() * (max - min + 1) + min
console.log(Math.floor(Math.random() * (max - min + 1)) + min)
// output: random integer between 10 and 20