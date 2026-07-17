//Primitive

// 7 Types:string,number,boolean,null,undefined,symbol,bigint

const score=100
const scoreValue=100.33

const isLoggedIn=false
const outsideTemp=null
let userEmail;

const id= Symbol('123')
const anotherId= Symbol('123')

//console.log(id===anotherId);

const bigNumber=226546425885589557899522n





//reference type (non-primitve)
//array,objects,functions
const heros=["shaktiman",'naagraj',"doga"]
let myObj={
    name:"subham",
    age:20,
}

//const myFunction = function(){
//     console.log("Hello World");}


//     console.log(typeof bigNumber);
//     console.log(typeof outsideTemp);
//     console.log(typeof myFunction);
//     console.log(typeof heros);

// console.log(typeof id);

//********************Memories and heap ,stack *************/

//Stack (primitive),
// it gives copies of the object , changes are made to the copy not the original data.
// 
// heap (non-primitive)
//it gives reference and the changes are made in the original data.

let myYoutubename="hiteshchaudhraydotcom"
let anothername=myYoutubename

anothername="chaiaurcode"
console.log(anothername);
console.log(myYoutubename);

let user1 ={
    email:"user@gamil.com",
    upi:"user@ybl"
}

let user2=user1
user2.email="subham@gmail.com"
console.log(user2.email)
console.log(user1.email)