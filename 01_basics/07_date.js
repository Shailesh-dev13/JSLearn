//DATES

let myDate=new Date()
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toJSON())
// console.log(myDate.toISOString())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())
// console.log(typeof myDate)


//let mycreatedDate=new Date(2026,6,18)// the months starts from 0 i.e. jan is 0 indexed
//let mycreatDate=new Date(2026,6,18,9,2)
//let mycreatedDate=new Date("2026-07-18")
let mycreatedDate=new Date("07-18-2026")

//console.log(mycreatDate.toLocaleString())
//console.log(mycreatedDate.toDateString())
//console.log(mycreatedDate.toLocaleString())
//console.log(mycreatedDate.toLocaleString())

let myTimeStamp=Date.now()
//console.log(myTimeStamp)
//console.log(mycreatedDate.getTime())
//console.log(Math.floor(Date.now()/1000))//the timestamp or date.now gives the number of milliseconds passed scince teh universal epoch 1 jan 1970

let newDate=new Date()
//console.log(newDate.getMonth()+1)
//console.log(newDate.getDay())


//console.log(`${newDate.getDay()}`, "is the day today")

console.log(newDate.toLocaleString('default',{
    weekday:"long"
   
}))
