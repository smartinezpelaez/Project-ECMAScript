//arrays destructuring

let fruits = ['Apple', 'Banana'];
let [a,b] = fruits;
console.log(a);
console.log(a,b);
console.log(a, fruits[1]);

// Object destructuring 

let user = {username: 'steven', age: '39'};
let{username, age} = user;
console.log(username,age);
console.log (user.username, user.age);

// spread operator propagacion de codigo

let person = {name: 'vanessa', age: 40};
let country = 'COL';
let data = {id:1, ...person, country};
console.log(data);

// rest parameter

function sum (num, ...values){
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}
sum(1,2,3,4,5);

