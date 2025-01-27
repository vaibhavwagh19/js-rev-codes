// const mail = ""
const mail = []
if (mail) {
    console.log("mail sent");
}
else{
    console.log("no mail sent");
}

// falsy values
// false , 0 , -0 , BigInt 0n , "" , null , undefined , NaN

// truethy values
// "0" , 'false' , " " , [] , {} , function(){}

const usemail = " "
if(usemail.length===0){
    console.log("empty mail");
    
}
const empobj = { }
if (Object.keys(empobj).length ===0){
    console.log("empty object");    
}


/* 
Nullish coalescing operator (??) : null defined

The nullish coalescing operator (??) is a logical operator in JavaScript that returns the right-hand operand when the left-hand operand is null or undefined, and otherwise, it returns the left-hand operand.
*/

let val1;
// val1 = 3 ?? 4
// val1 = null ?? 4;
// val1 = 4 ?? undefined;
val1 = null ?? 10 ?? 45
console.log(val1);


/*
Terniary operator

condition ? true : false
*/
const icey = 100;
icey <= 80 ? console.log("less thqn 80"):console.log("greater than 80")