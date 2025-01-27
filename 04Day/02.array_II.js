const heroes = ["luffy","ace","sabo","zoro"]

const villans = ["blackbeard","crocodile","kaido","bigmom"]

// heroes.push(villans)

// console.log(heroes);

// const allhv = heroes.concat(villans) // concat

// console.log("Concat : ",allhv);

const allhv2 = [...heroes,...villans] // spread
// console.log("Spread : ",allhv2);


const anotherArr = [1,2,3,[4,5,6],7,[6,5,[4,3]]]

const singleArr = anotherArr.flat(3) // ajust the depth of the array
// console.log(singleArr);


console.log(Array.isArray("vai")); //check if array is an array
console.log(Array.from("vai")); // conver to array 

console.log(Array.from({name:"hola"}));

let scr1=90
let scr2=80
let scr3=70

console.log(Array.of(scr1,scr2,scr3));

