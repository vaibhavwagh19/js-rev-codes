//Date 
let myDate = new Date()

// console.log(myDate);
// console.log(myDate.toString());

// console.log(myDate.toDateString());
// console.log(myDate.toTimeString());

// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());

// console.log(myDate.toLocaleString());

// console.log(myDate.toUTCString());

// console.log(myDate.toISOString());

// console.log(typeof myDate);

// let mycreatedDate = new Date(2025,0,5)
// let mycreatedDate = new Date(2025,0,5,5,5,5)
// let mycreatedDate = new Date("2025-02-02")
// let mycreatedDate = new Date("07-09-2025")

// console.log(mycreatedDate.toLocaleString());

let newDate = Date.now()
console.log(newDate);

let test = new Date(newDate)

console.log(test.getFullYear());
console.log(test.getMonth()+1);
console.log(test.getDate());
console.log(test.getHours());
console.log(test.getMinutes());
console.log(test.getSeconds());
console.log(test.getUTCMilliseconds());


console.log(test.toLocaleString('default',{
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
}));



