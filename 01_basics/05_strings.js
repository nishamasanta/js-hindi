const name = "Nisha"
const repoCount = 50
// console.log(name+ repoCount + "Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('nisha-nm')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('n'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-7,4)
console.log(anotherString);

const newStringOne="  nisha  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://nisha.com/nisha%20nm"
console.log(url.replace('%20', '-'))

console.log(url.includes('nisha'))
console.log(url.includes('hello'))

console.log(gameName.split('-'));
