// switch(key){
//     case value:
//         break;
//     default:
//         break;
// }

const month="march"
switch (month) {
    case "jan":
        console.log("january");
        break;
    case "feb":
        console.log("february");
        break;
    case "march":
        console.log("march");
        break;
    case "apr":
        console.log("april");
        break;
        
      //when ever the key is matched all the code after that executes serially except the default case , this is where break comes in it terminate the code execution after the first key is found and satisfied  
    default:
        console.log("default case match")
        break;
}