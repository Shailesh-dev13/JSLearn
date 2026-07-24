const userEmail=[]

if(userEmail){
    console.log("got user email")
}else{
    console.log("dont have user emial");
    
}
//falsy values

//false,0,-0,BigInt 0n,"",null,undefined,NaN

//truthy values
//"0",'false'," ",[],{},function(){}

// if (userEmail.length===0){
//     console.log("array is empty");
    
// }

const emptyObj={}

if (Object.keys(emptyObj).length===0) {
    console.log("Object is empty");
    
    
}

//Nullish coalescing operator (??):null undefined it is used if the error occurs then it can take the alternate values

let val1;
//val1 = 5 ?? 10
//val1=null ?? 10
//val1=undefined ?? 15
val1 = null?? 100 ?? 20

console.log(val1)

//Terniary operator

// consdition ? true : false

const iceTeaPrice=100
iceTeaPrice<=80? console.log("less than 80"):console.log("more than 80")