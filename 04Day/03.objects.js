// singleton - object created from constructor
// Object.create

//object literals

const mySym = Symbol("key1")

const userJs = {
    id : 1,
    name: "Vaibhav",
    "sname":"Wagh",
    age:22,
    location:"Ngp",
    hobbies:["Coding","Reading"],
    "full name": "Vaibhav Wagh",

    [mySym]:"key12" //symbol 
}

// console.log(userJs.name);
// console.log(userJs.sname)
// console.log(userJs["sname"]);

// console.log(userJs["full name"]);

// console.log(typeof userJs[mySym]); //symbol

userJs.location = "jaipur"
// Object.freeze(userJs) // freeze no other changes can be made
userJs.location = "apur"

console.log(userJs);


userJs.greeting = function(){
    console.log("hello user!");
}

userJs.greetingTwo = function(){
    return `hello user!, ${this.name}`
}

console.log(userJs.greeting()); // undefined is return value of function
console.log(userJs.greetingTwo());
