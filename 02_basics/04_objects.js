//const tinderUser=new Object()
const tinderUser={
    
}

tinderUser.id="abc123"
tinderUser.name="suresh"
tinderUser.isLoggedIn=false

//console.log(tinderUser);

const regUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"subham",
            lastname:"panigrahi"
        }
    }
}
//console.log(regUser.fullname?.userfullname);

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
const obj4={5:"e",5:"f"}

//const obj3={obj1,obj2}
//const obj3=Object.assign({},obj1,obj2,obj4)
const obj3={...obj1,...obj2,...obj4}
//console.log(obj3);

const users=[
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    }
]

users[1].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'))


//**********************Object destructuring**************************//

const course={
    coursename:"desh bacho",
    price:"3669",
    courseInstructor:"subham"
}

//course.courseInstructor

const{courseInstructor: instructor}=course
//console.log(courseInstructor);
console.log(instructor);

// {
//     "name":"subham",
//     "coursename":"js in hindi",
//     "price":"free"

// }

[
    {},
    {},
    {}
]
