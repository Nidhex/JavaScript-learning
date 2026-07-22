// ====================== FOR LOOP ====================== //


// Basic for loop
// Syntax:
// for(initialization; condition; increment/decrement)

for (let index = 0; index < 10; index++) {

    // current value of index
    const element = index;

    // checking condition
    if (element == 5) {

        // console.log("5 is the best number");
        // output:
        // 5 is the best number
    }

    // prints current value
    // console.log(element);

    // output:
    // 0
    // 1
    // 2
    // ...
    // 9
}



// ====================== NESTED FOR LOOP ====================== //


// Outer loop
for (let i = 0; i <= 10; i++) {

    // console.log(`Outer loop value: ${i}`);

    // output:
    // Outer loop value: 0
    // ...
    // Outer loop value: 10


    // Inner loop
    for (let j = 0; j < 10; j++) {

        // console.log(`Outer loop value: ${i} and inner loop ${j}`);

        // output example:
        // Outer loop value: 2 and inner loop 5


        // Multiplication table
        // console.log(i + '*' + j + '=' + i * j);

        // output example:
        // 2*5=10
    }
}



// ====================== LOOPING THROUGH ARRAY ====================== //


let myarray = ["flash", "batman", "superman"]


// myarray.length = 3

for (let index = 0; index < myarray.length; index++) {

    const element = myarray[index];

    // console.log(element);

    // output:
    // flash
    // batman
    // superman
}



// ====================== BREAK ====================== //


// break immediately exits the loop

for (let index = 1; index <= 20; index++) {

    if (index == 5) {

        console.log(`Detected 5`);
        // output:
        // Detected 5

        break;
    }

    console.log(`value of i is ${index}`);

    // output:
    // value of i is 1
    // value of i is 2
    // value of i is 3
    // value of i is 4
}

// After break, loop stops completely.



// ====================== CONTINUE ====================== //


// continue skips current iteration
// loop continues with next value

for (let index = 1; index <= 20; index++) {

    if (index == 5) {

        console.log(`Detected 5`);
        // output:
        // Detected 5

        continue;
    }

    console.log(`value of i is ${index}`);
}

/*
output:

value of i is 1
value of i is 2
value of i is 3
value of i is 4
Detected 5
value of i is 6
value of i is 7
...
value of i is 20
*/



/*
====================== REVISION NOTES ======================

⭐ IMPORTANT NOTES

1.
For Loop Syntax

for(initialization; condition; increment){

}

Example

for(let i=0; i<5; i++){

}

2.
Three Parts

Initialization
Runs only once.

Condition
Checked before every iteration.

Increment/Decrement
Runs after every iteration.

3.
Nested Loop

A loop inside another loop.

Example

for(let i=0;i<3;i++){
    for(let j=0;j<3;j++){

    }
}

4.
Multiplication Table

console.log(i + "*" + j + "=" + i*j)

5.
Looping Through Array

for(let i=0; i<array.length; i++){

    console.log(array[i]);

}

6.
array.length

Returns total number of elements.

Example

["A","B","C"]

length = 3

7.
break

Immediately exits the loop.

Example

for(...){

    if(i==5){

        break;

    }

}

Loop stops completely.

8.
continue

Skips current iteration only.

Example

for(...){

    if(i==5){

        continue;

    }

}

Loop continues with next value.

9.
Difference

break
➡ Stops entire loop.

continue
➡ Skips only one iteration.

10.
Most Interview Questions

break

1
2
3
4
(stop)

continue

1
2
3
4
(skip 5)
6
7
8...

Remember:

break = Exit Loop

continue = Skip Current Iteration
*/