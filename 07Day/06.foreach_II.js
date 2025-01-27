// const coding = ["js", "css", "py", "cpp","java"]

// const values = coding.forEach( (item) => {
//     console.log(item);
//     // return item
// })
// console.log(values);


const myNumber = [1,2,3,4,5,6,7,8,9,10]
// const store = myNumber.filter( (num)=> num > 4 )
// const store = myNumber.filter( (num)=> {
//    return num > 4
// })
// console.log(store);


// const newNum = []
// myNumber.forEach( (num) => {
//     if (num>4){
//         newNum.push(num)
//     }
// })
// console.log(newNum);


const books = [
    { title: 'Book One',genre: 'Fiction',publish: 1981,edition: 2004 }, 
    { title: 'Book Two',genre: 'Non-Fiction',publish: 1992,edition: 2008}, 
    {title: 'Book Three',genre: 'History',publish: 1999,edition: 2007}, 
    {title: 'Book Four',genre: 'Non-Fiction',publish: 1989,edition: 2010}, 
    {title: 'Book Five',genre: 'Science',publish: 2009,edition: 2014},
    {title: 'Book Six',genre: 'Fiction',publish: 1987,edition: 2010},
    {title: 'Book Seven',genre: 'Non-Fiction',publish: 1995,edition:2010},
    {title: 'Book Eight',genre: 'Fiction',publish: 1993,edition:2000},
]

let usesrBooks= books.filter((bk) => bk.genre === 'Fiction')

usesrBooks = books.filter((bk) => {
    return bk.publish >= 1996 && bk.genre==="History"
})
console.log(usesrBooks);
