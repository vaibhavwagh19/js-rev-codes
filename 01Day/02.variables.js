const accId = 1232  // cannot be canged
let accEmail = "vaibhav@gmial.com" // can be changed
var accPass = "1234" // can be changed
accCity = "Jaipur" // can be changed

let accDate;

/*
prefer not to use var
because of issue in block scope and functional scope

const = can't be re-assigned a value and can't be declared again  (block scope)
let = can be re-assigned a value but can't be declared again (block scope)
var = it can be re-assigned a value and it can also be declared again  (Global scope)
*/


// accId = 12 
// console.log(accId);

accEmail = "hola@gmail.com"
// console.log(accEmail);

accPass = "pass"
// console.log(accPass);

accCity = "Ngp"
// console.log(accCity);


console.table([accId,accEmail,accPass,accCity,accDate])