function myName(){
    console.log('r');
    console.log('a');
    console.log('a');
    console.log('m');
}

// myName()      // myName is reference and myNmae() is execution

// function addition(num1 , num2) {             // num1 and num2 are called parameters
//     console.log(num1 + num2);
// }
// addition(3,6)                                // 3,6 are called arguments



function addition(num1 , num2) {             
    // let result = num1+num2
    // return result
    return num1 + num2
}
const results = addition(3,6)   
//console.log("Result: ", results );   


function loginUserMsg(userNmae = 'bro'){
    if (userNmae === undefined) {
        console.log('pls enter user name');
        return
    }
    return ` ${userNmae} just logged in`
}

//console.log(loginUserMsg('raam'));
// console.log(loginUserMsg("yoo"));

function calculateCartPrice(...numm1){
    return numm1
}

console.log(calculateCartPrice(2000,3,234));


const user = {
    userName : 'raaaam',
    price : 2344
}

function objHandle(anyObj){
    console.log(`username is ${anyObj.userName} and price is ${anyObj.price}`)
}
// objHandle(user)

objHandle({
    userName:'ururu',
    price: 5464
})

const myArray =[200,3003,515,454]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myArray))