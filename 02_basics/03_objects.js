// singleton 

// object literrasl
const sym = Symbol("key1")
const jsUser = {
    name : "Raam",
    "full Name": "Raam Bhat",
    [sym]: "newSym",
    age: '12',
    email: "rambhat@gmail.com",
    login: true ,
    lastLogin: 'Mon'
}
// console.log(jsUser.name);
// console.log(jsUser['email']);
// console.log(jsUser['full Name']);
// console.log(jsUser[sym]);                 // use of square brackets be better than useing by . jsUser.name

 jsUser.email = 'ram@chat.com'
// Object.freeze(jsUser)             // this will not allow any vhanges in the object any further
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("hello js user");
}
jsUser.greetingtwo = function(){
    console.log(`hello js user ${this.name} of age ${this.age} and emailid being ${this.email}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greetingtwo());