/*
While Loop
*/

cond = true
while (cond) {
    for (var i = 0; i <5 ; i++) {
        if(i===2)
            cond = false
            break
        console.log(i);       
    }
}


// let marr = ["A", "B", "C", "D", "E"]
// let arr = 0
// while (arr< marr.length) {
//     console.log(`val: ${marr[arr]}`);
//     arr = arr+1   
// }


/*
Do While Loop
*/
// let score = 1;
// do{
//     console.log(`score : ${score}`);
//     score++   
// }while(score<=10)