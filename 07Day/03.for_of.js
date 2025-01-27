// The for...of loop in JavaScript is used to iterate over the values of iterable objects, such as arrays, strings, maps, sets, and more. It is simpler and more readable than other looping constructs like for...in or forEach when dealing with values directly.

// Array is iterateable for for-of
const arr = [1, 2, 3, 4, 5];
// for (const num of arr) {
//     console.log(num);   
// }

const geets = "hello world"
// for (const g of geets) {
//     console.log(g);   
// }


// MAP is iterateable for for-of
const map = new Map();
map.set('IN',"India")
map.set('USA',"United States")
map.set('FR',"France")
console.log(map);
for (const [key,value] of map) {
    console.log(`key: ${key} => value: ${value}`);   
}


// Object is iterateable for for-of
const myobj = {
    "game1":"NFS",
    "game2":"GOT",
    "game3":"SPY",
}
// for (const gm of myobj) {
//     console.log(gm);
// }



/*
Note:

FOR in DESCRIPTION       =>     it works for ARRAY and OBJECT but not works on MAP
FOR of DESCRIPTION      =>     it works for ARRAY and MAP[ key, value] but not works on OBJECT.
FOR each DESCRIPTION =>     it works for ARRAY, OBJECT and MAP.

*/