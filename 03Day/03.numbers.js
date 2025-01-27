const score = 400
const balance = new Number(100)

console.log(score);
console.log(typeof(score));

console.log(balance);
console.log(typeof(balance));
 
console.log(balance.toString().length);
console.log(balance.toFixed(2));

const numNew = 1189.292
console.log(numNew.toPrecision(5));

const hundred = 10000000
console.log(hundred.toLocaleString('en-IN'));




/*
Note: Number has comparatively less prototype properties (methods) than String

Methods with examples:
1. balance.toString() // This converts a number into string
2. balance.toString().length // Once we convert it to String, all properties / methods of Strings are now open to us, such as length
3. balance.toFixed(2) // Used to reduce or round of to specific decimal values
    - Use Cases 
        a. After calculation of GST
        b. In Ecommerce website

4. const otherNumber = 23.8966
    otherNumber.toPrecision(3) // Output - 23.9
    otherNumber = 123.8966
    otherNumber.toPrecision(3) // Output - 124    
    otherNumber = 1123.8966
    otherNumber.toPrecision(3) // Output - 1.12e+3 (exponential value)

5. const hundreds = 1000000
    hundreds.toLocalString() // By default it converts into US standards
    hundreds.toLocalString('en-IN') // As per Indian Standards
    (Note: Check other formats in MDN Docs)

6. Other methods
    .MAX_VALUE
    .MIN_VALUE
    .MAX_SAFE_INTEGER
    .MIN_SAFE_INTEGER
*/