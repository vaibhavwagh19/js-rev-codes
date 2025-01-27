// const webUser = new Object() // singleton object
const webUser = {}  // non-singleton object

webUser.id="123"
webUser.name="joy"
webUser.isLogged=false

// console.log(webUser);

const regularUser = {
    email:"vaibhav@gmail.com",
    fullName:{
        userFullName:{
            firstNamr:"Vaibhav",
            lastName:"Wagh"
        }
    }
}

// console.log(regularUser.fullName.userFullName.firstNamr);

const obj1 = { 1:"a", 2:"b", }
const obj2 = { 3:"c", 4:"d", }
const obj3 = { 5:"e", 6:"f", }

// const obj4 = {obj1,obj2}

// const obj4 = Object.assign({},obj1, obj2,obj3)

const obj4 = {...obj1, ...obj2, ...obj3}
// console.log(obj4);


const users = [
    {
        id:1,
        email:"email@example.com",
    },
    {
        id:2,
        email:"email2@example.com",
    }
]

users[1].email

console.log(webUser);

console.log(Object.keys(webUser));
console.log(Object.values(webUser));
console.log(Object.entries(webUser));

console.log(webUser.hasOwnProperty("isLogged"));


