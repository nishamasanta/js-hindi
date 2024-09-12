// Primitive

// 7 types : String, Number, Boolean , null(empty), undefined , symbol, BigInt.
 

//Reference(Nin primitive):Array,Objects,Functions

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

const bigNumber = 345683467847n

const heros =["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "Nisha",
    age: 22,
}

const myFunction = function(){
  //  console.log("hello World");
}

console.log(typeof bigNumber);


//*************************************************//

// Stack (Primitive ), Heap (Non-Primitive)

let myClass = "javaScript"
let anothername = myClass
anothername = "Hello"

console.log(myClass);
console.log(anothername);

let user1 ={
  email: "user@google.com",
  upi: "user@ybl"
}

let user2 = user1
user2.email ="nisha@google.com"

console.log(user1.email);
console.log(user2.email);


