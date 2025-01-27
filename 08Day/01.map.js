const myNumber = [1,2,3,4,5,6,7,8,9,10]
const newNjum = myNumber.map( (num) => {
    return num+10
})
// console.log(newNjum);


const newNjum3 = []
for (const key in myNumber){
    newNjum3.push(key+10)
} 
// console.log(newNjum3);

const newe = []
for (const element of myNumber) {
    newe.push(element + 10 );
}
// console.log(newe);
