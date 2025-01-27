
const myArr = [0,1,2,3,4,5,6,7,8]
const myHero = ["luffy","ace","sabo"]
const myArr2 = new Array();

// console.log(myArr[3]);
// console.log(myArr.length);

// console.log(myArr2);

//Array Methods

myArr2.push(4,8,9)
// myArr2.pop() // remove the last
// myArr2.shift() // remove the first
// myArr2.unshift(5) // add element to first

// console.log(myArr2.includes(4)); // check if element exist in array
// console.log(myArr2.indexof(8)); // give index no of element
// console.log(myArr2);

const newArray = myArr.join()
// console.log(newArray);

const hiArray = [...myArr] // clone existing array
hiArray.push(90)
// console.log(hiArray);

/* Slice & Splice */
console.log("Original : ",myArr);

const myslice = myArr.slice(1,6) // slice copy the elements from the array , so original array is not modified
console.log("Slice : ",myslice);

const mySplice = myArr.splice(1,6) // splice remove the elements frm the array , so original array is modified
console.log("Splice : ",mySplice);

console.log("Original : ",myArr);


/*
1. Array is written in brackets [  ].
2.Array data type is an object.
3.Array can contain different data types . i.e string,number,boolean,array etc.
4. Array is zero based indexing. It starts with zero.
5. Once changed its original value will also change beacause it is non primitive (refrence) type.

ARRAY METHODs :

1.Push = adds value to last of an array.
2. Pop = removes last value of an array.
3. Unshift = adds value at first of an array.
4.Shift = removes first value of an array.
5. Includes = checks true or false.
6. IndexOf = checks the position of value in number form.
7.Join = converts to string.
8. Slice(value to remove from,value remove upto but don't include)= returns new array and original value remains unchanged. Use when you need to extract a portion of an array without modifying it.
9. Splice(value to delete from, number of value to delete) = returns new array with deleted one and original value changed.Use when you need to add, remove, or replace elements within an array.
*/