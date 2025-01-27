// The forEach method is used when you want to perform an operation on each element of the array but don't need a new array.
// It is similar to the for loop but more concise.

const coding = ["js", "css", "py", "cpp","java"]

// TYPE1
// coding.forEach(  function (val){
//     console.log(val);
// } )

// TYPE2
// coding.forEach( (val) => {
//     console.log(val);
// } )

// TYPE3
// function printme(item){
//     console.log(item);
// }
// coding.forEach(printme)


// coding.forEach( (item,index,arr) => {
//     console.log(item,index,arr);
// })



const mycodingNew = [
    {
        langName:"javascript",
        langExt:"js"
    },
    {
        langName:"css",
        langExt:"css",
    },
    {
        langName:"python",
        langExt:"py",
    },
    {
        langName:"c++",
        langExt:"cpp",
    },
    {
        langName:"java",
        langExt:"java",
    },
]

mycodingNew.forEach( (item) => {
    console.log(`${item.langExt} => ${item.langName}`);
    
})