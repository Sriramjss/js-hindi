let name = " ram"
const repoCount = 50
console.log(`my name is ${name} and my repo count is ${repoCount}`);

const gameName =  String('RAamaaa-bhat')

console.log(gameName[0]);
console.log(gameName.__proto__);    // these are the functions in the objects u can see thse in the chrome console
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('a'));

let newstring = gameName.substring(2,6)   // substring
console.log(newstring);

let onwstring = gameName.slice(-8,9)
console.log(onwstring);



let mystr = "       randomacc     "
console.log(mystr);
console.log(mystr.trim());

const url = "https/sdf/sfsdf%20b/har"
console.log(url.replace('%20','-'));
console.log(url.includes('bhar'));
console.log(url.split('/',2));