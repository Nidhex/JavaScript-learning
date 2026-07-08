// ====================== OBJECTS ====================== //


// singleton object
// created using Object.create()
// this is another way of creating objects
// Object.create()


// ====================== OBJECT LITERALS ====================== //


// Symbol creates a unique value
const mysym = Symbol("key1")


// object literal
const jsuser = {
    name: "nidhish",

    // ⭐ IMPORTANT NOTE:
    // Keys with spaces CANNOT be accessed using dot notation.
    // They must always be accessed using bracket notation.
    "full name": "nidhish vaishnav",

    // ⭐ IMPORTANT NOTE:
    // To use a Symbol as an object key,
    // always wrap it inside []
    // Without [] it becomes a normal string key.
    [mysym]: "mykey1",

    age: 13,
    Email: "nidsvaisha210@gmaik.com",
    location: "jaipur",
    isloggedin: false,
    lastlooginDays: ["Monday", "Saturday"]
}



// ====================== ACCESSING OBJECT VALUES ====================== //


// Method 1 (Dot Notation)
// Used when key is a valid identifier
console.log(jsuser.Email)
// output: "nidsvaisha210@gmaik.com"


// Method 2 (Bracket Notation)
// Used for dynamic keys, keys with spaces, Symbols, etc.
console.log(jsuser["Email"])
// output: "nidsvaisha210@gmaik.com"


// ⭐ IMPORTANT NOTE:
// Dot notation will NOT work for keys having spaces.
// Correct way is bracket notation.
console.log(jsuser["full name"])
// output: "nidhish vaishnav"


// ⭐ IMPORTANT NOTE:
// Symbol properties are ALWAYS accessed using []
console.log(jsuser[mysym])
// output: "mykey1"



// ====================== MODIFYING OBJECT ====================== //


// changing property value
jsuser.Email = "NVchatgpt@gmailcom"


// Object.freeze() makes object immutable
// After freezing, no value can be added, changed or deleted.
// Uncomment to test.
// Object.freeze(jsuser)


// This line will work only if object is NOT frozen.
jsuser.Email = "NVmicrosofrt@gmail.com"


console.log(jsuser)
// output: updated object



// ====================== ADDING FUNCTIONS ====================== //


// adding function as object property
jsuser.greeting = function () {
    console.log("yooooo jsuser")
}


// using 'this'
// 'this' refers to the current object
jsuser.greetingtwo = function () {
    console.log(`yooooooo jsuser, ${this.name}`)
}


// redefining same function
// Old function gets overwritten.
jsuser.greetingtwo = function () {
    console.log(`yooooooo jsuser, ${this.Email}`)
}



// calling greeting()
// greeting() itself returns undefined
// because it only prints something and doesn't return anything.
console.log(jsuser.greeting())

// output:
// yoooooo jsuser
// undefined



// calling greetingtwo()
console.log(jsuser.greetingtwo())

// output:
// yooooooo jsuser, NVmicrosofrt@gmail.com
// undefined



// ====================== REVISION NOTES ====================== //

/*
⭐ IMPORTANT NOTES

1. Object Literal
   const obj = { }

2. Dot Notation
   obj.name

3. Bracket Notation
   obj["name"]

4. Keys with spaces
   obj["full name"] ✅
   obj.full name ❌

5. Symbol Key
   const sym = Symbol("id")
   {
      [sym]: "value"
   }

6. Access Symbol
   obj[sym]

7. Object.freeze(obj)
   Prevents modification of object.

8. Functions can be stored inside objects.

9. 'this'
   Refers to the current object.

10. If a function only prints (console.log) and doesn't return anything,
    then console.log(function()) prints:
    value
    undefined
*/