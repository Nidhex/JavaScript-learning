// normal string variable
const name = "hitesh"

// number variable
const repocount = 50


// old way of string concatenation
console.log(name + repocount + " value")


// modern way using template literals (` `)
// ${} is used to inject variables inside string
console.log(`hello my name is ${name} and my repo count is ${repocount}`)


// creating string using String object
const gamename = new String(`nid-hishje-foef-m`)


// access character using index
// indexing starts from 0
console.log(gamename[0])


// gives total length of string
console.log(gamename.length)


// returns character at given index
console.log(gamename.charAt(2))


// returns index position of character
// here 3 is not present so output will be -1
console.log(gamename.indexOf(3))


// substring(start , end)
// end index is not included
// extracts characters from index 0 to 3
const newstring = gamename.substring(0, 4)
console.log(newstring)


// slice(start , end)
// can also use negative indexes
// here start > end so output will be empty string
const anotherstring = gamename.slice(6, 4)
console.log(anotherstring)


// string with extra spaces
const newstringone = "      nid      "

console.log(newstringone)


// trim() removes spaces from start and end
console.log(newstringone.trim())


// url string
const url = "https://hitesh.com/hitesh%20choudhary"


// replace old value with new value
// %20 is replaced with -
console.log(url.replace('%20', '-'))


// split() converts string into array
// string breaks wherever '-' is found
console.log(gamename.split('-'))