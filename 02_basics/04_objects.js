const tinderUser =  new Object() //->singleton object
// const tinderUser1 = {}          // ->non-singleton object

tinderUser.id ="123abc"
tinderUser.name = "Camel"
tinderUser.isloggedIn = false

//console.log(tinderUser);
//  console.log(tinderUser1);
 
const regularUser = {
    email : "hello@gmail.com",
    fullname : {
        userfullname: {
            firstname :"Nisha",
            lastname : "Masanta"
        }
    }
}
 
//console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4: "b"}

const obj3 ={obj1, obj2}
const obj4 = Object.assign({}, obj1 , obj2)

const obj5= {...obj1, ...obj2}

// console.log(obj3);
// console.log(obj4);
// console.log(obj5);

const users =[
    {
        id: 1
    }
]

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isloggedIn'));


const course ={
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

const {courseInstructor: instructor} = course

//console.log(courseInstructor);
console.log(instructor);
