

function one(){
    const username = "vaibhav"
    
    function two(){
        const website = "youtube"
        console.log(username);
    }
    two();
    // console.log(website);
}
// one();


if(true){
    const username = "vaibhav"
    if (username==="vaibhav"){
        const website = "youtube"
        // console.log(username+ " " + website);     
    }
    // console.log(website);
}
// console.log(username);


console.log(example(5)); // can be done in this example
function example(value){
    return value+1
}

console.log(exampleTwo(5)) // can not be done in this exampleTwo
const exampleTwo = function(value){  // in this example function is created and stored in variable
    return value+2
}
console.log(exampleTwo(5)) 
