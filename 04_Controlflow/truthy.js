const userEmail ="nidsvaishnav20@gmail.com";

if(userEmail){
    console.log("Got user email");

}else{
    console.log("don't have user email");
}
// falsy value
// false,0,-0,BigInt 0n,  "" , null, undefined,NaN;

//truthy value
// "0" , 'false' , " " , []  , {} , function(){} 

if(userEmail === 0 ){
    console.log("Array is empty");
}

const emptyObj = {};

if(Object.keys(emptyObj).length === 0){
    console.log("object is empty");
}

