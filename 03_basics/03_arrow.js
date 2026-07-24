const user ={
    username:"subham",
    price:999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);//this refers to current context
        console.log(this)
    }
}
// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()
//console.log(this)// in node environment this will give empty {}, but in the browser it will give windows function

// function chai(){
//     let username="subham"
//     console.log(this.username)
// }
// chai()

// const chai = function (){
//     let username="subham"
//     console.log(this.username);

// }
const chai = () => {// its a arrow function
    let username="subham"
    console.log(this);
}
//chai()

// const addTwo =(num1,num2) => {
//     return num1+num2
// }

//const addTwo=(num1,num2)=>  num1+num2 // implicit return
//const addTwo=(num1,num2)=> ( num1+num2 )// using implicit return with paranthesis() we dont require the return keyword
const addTwo = (num1 , num2) => ({username:"hitesh"})
console.log(addTwo(3,4))

// const myArray=[2,3,4,5,6]

// myArray.forEach()