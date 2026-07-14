// if
const isuserloogin = true;
const tempture =41

if(tempture === 40){
    console.log(`less then 50`);
    
} else {
     console.log(`tempture is grrester then 50`);
}
 
//<,>,<=,>=,==,!=,===,!==

const score = 200
if(score>100){
     power = "fly"
    console.log(`user poewer: ${power}`);
}
 //  console.log(`user poewer: ${power}`);\

 const balance =1000
 if (balance>500) console.log("test");

 if(balance< 500){
    console.log("less then");
 }  else if(balance<750){
    console.log("less then 750")
 }else {
    console.log("less then 1200");
 }

 const userLoggedIn =true
const debitCard = true
const loggedInFromEmail =true

if(userLoggedIn && debitCard){
    console.log("allow to buy course");
}

if(userLoggedIn ||  loggedInFromEmail){
    console.log("user logged in")
}