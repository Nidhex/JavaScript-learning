// ====================== ARRAY ====================== //


// normal array
const myArr = [0, 1, 2, 3, 4, 5]


// array of strings
const myHeors = ["shaktiman", "naagraj"]


// another way to create array using Array constructor
const myArr2 = new Array(1, 2, 3, 4)


// access value using index
// indexing starts from 0
console.log(myArr[1]);
// output: 1



// ====================== ARRAY METHODS ====================== //


// push() adds element at end
myArr.push(6)
myArr.push(7)


// pop() removes last element
myArr.pop()

// current array: [0,1,2,3,4,5,6]


// unshift() adds element at start
myArr.unshift(9)


// shift() removes first element
myArr.shift()

// current array again: [0,1,2,3,4,5,6]



// checks if value exists in array
console.log(myArr.includes(9));
// output: false


// returns index of element
console.log(myArr.indexOf(3));
// output: 3



// join() converts array into string
const newArr = myArr.join()


// original array
console.log(myArr);
// output: [0,1,2,3,4,5,6]


// array converted into string
console.log(newArr);
// output: "0,1,2,3,4,5,6"



// ====================== SLICE & SPLICE ====================== //


// original array before operations
console.log("A ", myArr);
// output: A [0,1,2,3,4,5,6]



// slice(start, end)
// extracts elements without changing original array
// end index is NOT included
const myn1 = myArr.slice(1, 3)


// extracted part
console.log(myn1);
// output: [1,2]


// original array remains unchanged
console.log("B ", myArr);
// output: B [0,1,2,3,4,5,6]



// splice(start, count)
// removes elements from original array
const myn2 = myArr.splice(1, 3)


// original array after splice
console.log("C ", myArr);
// output: C [0,4,5,6]


// removed elements
console.log(myn2);
// output: [1,2,3]

