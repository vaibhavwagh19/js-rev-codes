//this keyword - tells about current state/context
 
const user = {
    username:"joy",
    price:69,

    welcomeMsg:function(){
        console.log(`Welcome ${this.username}`);
        // console.log(this);
    }
}

// user.welcomeMsg()
// user.username="kill"
// user.welcomeMsg()

// console.log(this);



// function chai(){
//     let username = "sobo"
//     console.log(this.username);   
// }
// chai()

/*
Regular function: this refers to the context from where it’s called (like an object or global scope).

Arrow function: this doesn’t change based on how it’s called—it uses the this from the surrounding scope.
*/

const chai = () => {
    let username = "ace"
    console.log(this);
} 
// chai()


//Arrow function

// const calculatorApp = (num1,num2) =>{
//     return num1+num2 // explicit return
// }
// console.log(calculatorApp(5,6));

// const calculatorApp = (num1,num2) => num1+num2  //implicit return
// const calculatorApp = (num1,num2) => (num1+num2)  //implicit return - no need to write return
const calculatorApp = (num1,num2) => ({
    username:"vaibhav",
})  
console.log(calculatorApp(5,6));

const myArray =[2,2,3,4,6,7,8,]
myArray.forEach()