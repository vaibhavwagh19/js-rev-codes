//datatypes are based on memory allocation
/*
Stack - copy is tranferd

Heap - orignal value from reftrence is tranfered

Primitive datatypes ->  call by value (string,number,boolean,null,undefined,BigInt,symbol) -> Stack memory

Reference/Non primitive data types -> call by reference ( array,object, function) -> Heap memory

JavaScript is a dynamically typed language. This means that you don't need to specify the data type of a variable when you declare it.

*/

// stack
let name = "vaibhav"
let aName = name 
aName="wagh"
// console.log(aName);


// heap
let user1 ={
    name:"vaibhav",
    age:20,
    id:23
}

let user2=user1

user2.name="joy"

console.log(user2);
console.log(user1);
