// console.log(2>4);
// console.log(3>=2);

// console.log("3">3);
// console.log("333">3);

// console.log(null>0);
// console.log(null==0);
// console.log(null>=0);

/*
The reason is that an equality check == and comparisons > < >= <= work differently. Comparisons convert null to a number, treating it as 0. That’s why (3) null >= 0 is true and (1) null > 0 is false.
*/

// console.log(undefined>0);
// console.log(undefined==0);
// console.log(undefined>=0);

// === (strict check)

console.log("2"===2);
console.log(2===2);
