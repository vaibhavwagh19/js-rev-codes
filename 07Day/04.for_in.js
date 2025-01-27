// The for...in loop is primarily used to iterate over the keys (or indices) of an object (or array). It is not designed to transform data or create a new array directly, as it works with the properties of the object, not the values themselves.

// object is iterateable for for-in
const myobj = {
    py:"python",
    java:"java",
    cpp:"c++",
    js:"javascript",
}
// for (const key in myobj) {
//     console.log(`${key} for ${myobj[key]}`);
    
// }


// Array is iterateable for for-in
const prog = ["js", "py", "jsx","cpp"]
// for (const key in prog) {
//     console.log(prog[key]);   
// }


// The map method in JavaScript is specifically designed to create a new array by transforming each element of an existing array using a callback function.
// MAP is not iterateable for for-in
const map = new Map();
map.set("js", "javascript");
map.set("py", "python");
map.set("cpp", "c++");
map.set("py", "python");
for (const key in map) {
    console.log(key);   
}

/*
Note:

FOR in DESCRIPTION       =>     it works for ARRAY and OBJECT but not works on MAP
FOR of DESCRIPTION      =>     it works for ARRAY and MAP[ key, value] but not works on OBJECT.
FOR each DESCRIPTION =>     it works for ARRAY, OBJECT and MAP.

*/