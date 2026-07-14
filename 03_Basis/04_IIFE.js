// ====================== IIFE ====================== //


// IIFE = Immediately Invoked Function Expression
// It executes immediately after it is defined.

// Syntax:
// (function(){ })();



// ====================== NAMED IIFE ====================== //


// Named IIFE
(function chai() {

    console.log(`DB CONNECTED`);

})();
// output:
// DB CONNECTED


// ⭐ IMPORTANT NOTE:
// Semicolon (;) is REQUIRED after an IIFE.
// Without it, JavaScript may treat the next IIFE
// as a continuation of the previous one and throw an error.


// ====================== ARROW FUNCTION IIFE ====================== //


// Arrow Function IIFE
((name) => {

    console.log(`DB CONNECTED TWO ${name}`);

})("nidssss");
// output:
// DB CONNECTED TWO nidssss



/*
====================== REVISION NOTES ======================

⭐ IMPORTANT NOTES

1.
IIFE

Immediately Invoked Function Expression

Meaning:
A function that runs immediately after it is created.

2.
Syntax

(function(){

})();

OR

(()=>{
    
})();

3.
Why use IIFE?

✔ Avoids polluting the global scope.
✔ Creates a private scope.
✔ Executes code immediately.
✔ Commonly used for initialization code.

4.
Named IIFE

(function chai(){

})();

The function has a name (chai).

5.
Anonymous IIFE

(function(){

})();

No function name.

6.
Arrow IIFE

((name)=>{

})(value);

Example:

((name)=>{
    console.log(name);
})("Hitesh");

7.
Passing Parameters

((name)=>{

})( "Nidhish" );

8.
⭐ Most Important

Always end an IIFE with a semicolon.

(function(){

})();

Otherwise, writing another IIFE immediately after it
can cause a syntax error.

9.
Difference

Normal Function

function demo(){
   console.log("Hi");
}

demo();   // Call separately

IIFE

(function(){
   console.log("Hi");
})();

Runs immediately.
*/