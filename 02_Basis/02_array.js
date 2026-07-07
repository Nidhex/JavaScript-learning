// import statement
// used to import array utility from firebase firestore pipelines
import { array } from "firebase/firestore/pipelines"



// ====================== ARRAYS ====================== //


// marvel heroes array
const marvel_heros = ["thor", "ironman", "spiderman"]


// dc heroes array
const dc_heros = ["superman", "flash", "batman"]



// push() adds entire dc_heros array as a single element
// marvel_heros.push(dc_heros)


// prints nested array
// console.log(marvel_heros)


// accessing nested array value
// marvel_heros[3] = ["superman","flash","batman"]
// marvel_heros[3][1] = "flash"
// console.log(marvel_heros[3][1])



// ====================== CONCAT ====================== //


// concat() merges two arrays and returns new array
const allheros = marvel_heros.concat(dc_heros)


// merged array
console.log(allheros);
// output: ["thor","ironman","spiderman","superman","flash","batman"]



// ====================== SPREAD OPERATOR ====================== //


// spread operator (...) also merges arrays
const all_new_heros = [...marvel_heros, ...dc_heros]


console.log(all_new_heros);
// output: ["thor","ironman","spiderman","superman","flash","batman"]



// ====================== FLAT ====================== //


// nested array
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]


// flat(Infinity) converts nested array into single array
const real_another_array = another_array.flat(Infinity)


console.log(real_another_array);
// output: [1,2,3,4,5,6,7,6,7,4,5]



// ====================== ARRAY METHODS ====================== //


// checks whether given value is an array
console.log(Array.isArray("hitesh"));
// output: false


// converts string into array of characters
console.log(Array.from("hitesh"));
// output: ["h","i","t","e","s","h"]


// converts object into array
// here it cannot directly convert object
// so output will be empty array
console.log(Array.from({ name: "hitesh" }));
// output: []



// ====================== ARRAY.OF ====================== //


// normal variables
let score1 = 100
let score2 = 200
let score3 = 300


// Array.of() converts values into array
console.log(Array.of(score1, score2, score3));
// output: [100,200,300]