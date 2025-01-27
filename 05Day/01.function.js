function hellb(){  // defination
   console.log("a");
   console.log("b");
   console.log("c");
}

// hellb // refrance
// hellb() // execution

function addnum(num1,num2){
    // console.log(num2+num1);
    return num1+num2;   
}
// console.log(addnum(2,3));


function loggedIn(username){
    if(!username){
        console.log("Please");
        return
    }
    return `${username} logged in`;
}

// console.log(loggedIn("vaibhav"));
console.log(loggedIn());
