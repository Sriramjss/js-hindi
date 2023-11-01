const  heros = ["iron" , "spider" , "thir"]
const dcHeros = ["super", "bat", "aqua"]
// heros.push(dcHeros)
// console.log(heros);
// console.log(heros[3][1]);

ar1 = heros.concat(dcHeros);
console.log(ar1);

const new_heros = [ ... heros, ... dcHeros]

const arr1 = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const an_arry = arr1.flat(Infinity)
console.log(an_arry);


console.log(Array.isArray("raam"));
console.log(Array.from("raam"));

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));
