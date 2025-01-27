
// The reduce() method in JavaScript is used to execute a reducer function on each element of an array, resulting in a single output value. It's often used for tasks like summing up array elements, flattening arrays, or computing a product.
/*
array.reduce((accumulator, currentValue, currentIndex, array) => {
    // logic
}, initialValue);

-> accumulator: The accumulated value from the previous iteration (or the initial value in the first iteration).
-> currentValue: The current element being processed.
-> currentIndex: The index of the current element (optional).
-> array: The array being traversed (optional).
-> initialValue: The initial value of the accumulator (optional, but highly recommended).

*/

const myanum = [1,2,3,4]

const mytot = myanum.reduce( (acc,curr) => {
    console.log(`acc: ${acc}, curr:${curr}`);
    
    return acc + curr
}, 0 )

const mytot1 = myanum.reduce( (acc,curr) => acc + curr, 0 )

console.log(`mytot: ${mytot}`);
