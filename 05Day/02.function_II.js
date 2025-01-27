// ... ->rest or spread operator

function calculateCartPrice(val1,val2,...num1){
    return num1
}

console.log(calculateCartPrice(3,9,89,7,43));

const user = {
    username:"vaibhav",
    price: 98
}

function handelObj(anyonject){
    console.log(`username: ${anyonject.username} and price: ${anyonject.price}`);
    
}

// handelObj(user)
handelObj({
    username: "joy",
    price: 7
})


const myNewArray = [20,32,37,40]

function returnsSecondVal(getArray){
    return getArray[1]
} 

// console.log(returnsSecondVal(myNewArray));
console.log(returnsSecondVal([20,90,70,80]));
