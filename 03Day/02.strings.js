const name = "vaibhav"
const repcount = 25


// console.log(name+ repcount+ " Value");

// console.log(`hello my name is ${name} amd my repo count is ${repcount}.`); //best practice

const opname = new String('luffy')

// console.log(opname);
// console.log(opname[1]);
// console.log(opname.length);
// console.log(opname.toUpperCase());

// console.log(opname.charAt(3));
// console.log(opname.indexOf('y'));

const newString = opname.substring(0,3)
// console.log(newString);

const anothername = opname.slice(-5,3)
// console.log(anothername);

const newsq = "   ace    "
// console.log(newsq.trim());

const url = "https://vaibhav.com/vaibhav%20cloud"
console.log(url.replace('%20','-'));

// console.log(url.includes('vaibhav'));

console.log(url.split('%20'));


