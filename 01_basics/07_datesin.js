let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toTimeString());
console.log(typeof myDate);

let myCreatedDate = new Date(2002, 1 , 23)
console.log(myCreatedDate.toDateString());

// let myCreatDate = new Date(2002, 1 , 23 , 5, 10)

let myCreatDate = new Date("2024-09-29")
console.log(myCreatDate.toLocaleString());


let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatDate.getTime());
console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate.getDay);

newDate.toLocaleString('default',{
    weekday: "long"
})

