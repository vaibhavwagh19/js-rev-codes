
const numbera = 100

console.log(Math);
console.log(Math.abs(-5));
console.log(Math.round(31.55));
console.log(Math.ceil(34.25));
console.log(Math.floor(54.25));
console.log(Math.max(5,6,7,8,0));

console.log((Math.random()*10)+1);
console.log(Math.round(Math.random()*10)+1);

const min = 1
const max = 10

console.log(Math.floor(Math.random()*(max-min+1)+min));


/*
Maths library comes along with JS

Methods ----
1. Math.abs() // Converts +ve / -ve integer values to positive
2. Math.round(4.3) // Output - 4
3. Math.round(4.6) // Output - 5
4. Math.ceil(4.2) // Output - 5 (gives top value)
5. Math.floor(4.9) // Output - 4 (gives bottom value)
6. Math.min(4,3,6,8) // Output - 3
7. Math.max(4,3,6,8) // Output - 8
8. Math.random() // Gives random value between 0 & 1 in decimals

Math.random() tricks -----
Math.random()*10
Math.random()*10 + 1 // This assures that values are atleast 1 & more than 1
(Math.random()*10) + 1 // To avoid any BODMAS rule miscalculation

---- Trick to randomize value between range ----
const min = 10
const max = 20
const randomValue = Math.floor((Math.random() * (max - min + 1)) + min)
*/