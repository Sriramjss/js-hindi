


const score = 100
const scorevalue = 100.5
const loggin = true 
const temp = null             // data type is object
let user = undefined           //    undef

const id = Symbol('22')
const idd = Symbol('22')

console.log(id === idd);

const nigNum = 3737473842848432342n            // bigint


// array , objects , functions       // these all are call by reference   // its dattype is called functoin

const heros = ["shaktima" , " dogd" , "mannn"]
let myObj= {
    name: "raam",
    age: 78
}


const myFunction = function() {
    console.log("hello world");
}

console.log(typeof heros);




////////   MEMORY TYPES 
///////    STACK(PRIMITIVE) HEAP(NON PRIMITIVE)

let myYoutube = "rammmmm.com"
let anotherName = myYoutube
anotherName = "myself"       /// its stack here
console.log(myYoutube);
console.log(anotherName);

let userOne = {
    email : "ramgoogle.com",
    upi : "ramybl.com"
}
let userTwo = userOne
userTwo.email = "randomgoogle.com"
console.log(userOne.email);            /// its heap here
console.log(userTwo.email);