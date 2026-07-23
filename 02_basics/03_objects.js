//singleton
//Objesct.create

//object literals

const mySym=Symbol("key1")


const jsUser={
    name:"hitesh",
    "full name":"subham Panigrahi",
    [mySym]:"mykey1",
    age:18,
    location:"raipur",
    email:"subham@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["monday","saturday"]
}
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);
//console.log(mySym);


//console.log(jsUser.email)
// console.log(jsUser["email"]);
jsUser.email ="shailesh@gmail.com"
//console.log(jsUser.email)

//Object.freeze(jsUser)
jsUser.email="som@gmail.com"
//console.log(jsUser)

jsUser.greeting=function(){
    console.log("hello user")
}
jsUser.greetingTwo=function(){
    console.log(`hello user,${this.name}`)
}
// console.log(jsUser.greeting());
// console.log(jsUser.greetingTwo());

