// array = think of it as a variable
//         that can store multiple values


let fruits = ['apple', 'orange', 'banana'];

fruits[0] = 'coconut';

fruits.push('lemon')    // add an element
fruits.pop()            // removes last element
fruits.unshift('mango') // add element to beginning
fruits.shift()          // removes element from beginning

let lenght = fruits.length;
let index = fruits.indexOf('orange');

console.log(fruits)
console.log(fruits[0])
console.log(fruits[1])
console.log(fruits[2])