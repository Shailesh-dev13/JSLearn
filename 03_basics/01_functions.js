


function sayMyname(){
console.log("S");
console.log("U");
console.log("B");
console.log("H");
console.log("A");
console.log("M");
}
//sayMyname()

// function addTwoNumbers(number1,number2){

//     console.log(number1+number2);
    
// }

function addTwoNumbers(number1,number2){

    //  let result=number1+number2
    //  return result
     return number1+number2
    
 }
const result=addTwoNumbers(3,5)

//console.log("result:",result);

function loginUserMessage(username="sam"){
    if(!username){
        console.log("please enter username");
        return
        

    }
    return`${username} just logged in`
}
//console.log(loginUserMessage("rakesh"));

function calculateCartprice(val1,val2,...num1){
    return num1

}
//console.log(calculateCartprice(200,400,500));

const user={
    username:"subham",
    price:199
}
function handleObject(anyobject){
    console.log(`user name is ${anyobject.username} and price is ${anyobject.price}`);
    
}

// handleObject(user)
handleObject({
    username:"sam",
    price:399
})

const mynewArray=[200,400,100,600]

function returnSecondvalue(getArray){
    return getArray[1]
}
// console.log(returnSecondvalue(mynewArray))

console.log(returnSecondvalue([200,800,500,600]));

