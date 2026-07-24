//Immediately Invoked Function Expressions(IIFE)

(function chai(){
    console.log(`DB CONNECTED`)
})
();
//()() :- while using 2 paranthesis we should know that 1st one is for the fucntion itself and the second parantehesis is for the envocation of the function

// we use iife to remove the pollution created by the global scope

(function aurchai(){//named iife
    console.log(`DB ONE CONNECTED`);
})();
// to write 2 iife together the use ; at the end of one then start the other
((name) => {//unnamed iife
    console.log(`DB TWO CONNECTED ${name}`);
})('pandu')//parameters passed in iife