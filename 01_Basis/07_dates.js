// ====================== DATE ====================== //


// creates current date and time object
let mydate = new Date();


// full date and time in readable format
console.log(mydate.toString());
// output example: Sun Jul 06 2026 14:30:25 GMT+0530


// only date part
console.log(mydate.toDateString());
// output example: Sun Jul 06 2026


// local date and time format
console.log(mydate.toLocaleString());
// output example: 6/7/2026, 2:30:25 pm


// checks datatype
// Date is actually an object in JavaScript
console.log(typeof mydate);
// output: object



// create custom date using year, month, day
// NOTE: month indexing starts from 0 in JS
// 0 = January
// let myCreteatedDate = new Date(2023, 0, 23);


// creating date using string format
let myCreteatedDate = new Date("2023-01-14");


// prints only date
console.log(myCreteatedDate.toDateString());
// output: Sat Jan 14 2023



// Date.now() gives current timestamp in milliseconds
// IMPORTANT: Date.now needs () because it is a function
let myTimeStamp = Date.now();


// current timestamp in milliseconds
console.log(myTimeStamp);
// output example: 1783328452123


// timestamp of created date
console.log(myCreteatedDate.getTime());
// output example: 1673654400000


// converts milliseconds into seconds
console.log(Math.floor(Date.now() / 1000));
// output example: 1783328452



// current date object
let newdate = new Date();


// prints full current date
console.log(newdate);
// output example: 2026-07-06T09:00:00.000Z


// getMonth() returns month index
// January = 0
console.log(newdate.getMonth());
// output example: 6


// getDay() returns weekday index
// Sunday = 0
console.log(newdate.getDay());
// output example: 0



// customize date output
// weekday: "long" prints full weekday name
console.log(
    newdate.toLocaleString('default', {
        weekday: "long",
    })
);
// output example: Sunday