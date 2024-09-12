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
