const name="subham"
const repoCount=10

//console.log(name+repoCount+" value");

console.log(`hello ny name is ${name} and my repo count is ${repoCount}`);

const gameName= new String('subham-fx')
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName)
console.log(gameName.charAt(2));
console.log(gameName.indexOf('m'));

const newString=gameName.substring(0,4)
console.log(newString)

const anotherString = gameName.slice(-8,4)
console.log(anotherString)

const newStringOne="   subham   "
console.log(newStringOne)
console.log(newStringOne.trim())

const url="https://subham.com/subham%30panigrahi"


console.log(url.replace('%30','-'));
console.log(url.includes('subham'))


console.log(gameName.split('-'))
