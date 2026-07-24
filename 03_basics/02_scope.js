//var c=300
let a=300
if (true){
   let a=10
   const b=20
  // console.log("INNER:",a);
   
}
  
//console.log(a);
//console.log(b);
//console.log(c);


function one(){
   const username= "subham"

   function two(){
      const website = "youtube"
      console.log(username);

   }
 //  console.log(website);
   two()
}
//one()

if(true){
   const username="subham"
   if (username==="subham"){
      const website =" youtube"
     // console.log(username+website);
   }
   //console.log(website);
}
//console.log(username);

///+++++++++++++++++++++++interesting++++++++++++++++///
addone(5)
function addone(num){
   return num +1
}
//while declaring function in a variable we cant access before initialization
const addTwo = function(num){
   return num+2
}
addTwo(4)

