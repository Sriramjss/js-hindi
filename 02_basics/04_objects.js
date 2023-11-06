//const tinderUser =new Object()
const tinderUser = {}
tinderUser.id ='123user1'
tinderUser.name =' raam'
tinderUser.login = 'true'

// console.log(tinderUser);

const User01 = {
    fullName:{
        UserFullNmae : {
            firstName:'raambhat',
            lastname:'rao'
        }
    }
}
console.log(User01.fullName.UserFullNmae.lastname);


const obj1 = {1:'a' , 2:'b'}
const obj2 = {3:'s' , 4:'b'}
//const obj3 = {obj1,obj2}


// const obj3 = Object.assign({},obj1,obj2)     // combining the 2 objects
// console.log(obj3);


const obj3 = {...obj1,...obj2}
 // console.log(obj3);                    // combining the objets

 const users = [
    {

    },
    {

    },
    {

    }
 ]
 
 

//  console.log(Object.keys(tinderUser));
//  console.log(Object.values(tinderUser));           // imp for projects]
//  console.log(Object.entries(tinderUser));


//  console.log(tinderUser.hasOwnProperty('isloggedin'));


const cocurse = {
    coursename : "js",
    price : 494,
    courseInstrucrtor : "raam"
}

const {courseInstrucrtor : instructor} = cocurse
console.log(instructor);


