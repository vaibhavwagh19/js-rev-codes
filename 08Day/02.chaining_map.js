const myNumber = [1,2,3,4,5,6,7,8,9,10]

// const newNum1 = myNumber.map((num)=>num*10).map((num)=>num+2).filter((num)=>num>=50)
// console.log(newNum1)

const newNum = myNumber
                        .map((num)=>num*10)
                        .map((num)=>num+2)
                        .filter((num)=>num>=50)
console.log(newNum);
