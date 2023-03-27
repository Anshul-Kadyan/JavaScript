
// spread operator = allows an iterable such as an
// ...               array or string to be expanded
//                   in places where zero or more
//                   arguments are expected
//                   (unpacks the element)


let numbers = [1,2,3,4,5,6,7,8,9];
console.log(...numbers)

let userName = "Anshul Kadyan"
console.log(...userName)

let maximum = Math.max(numbers)
console.log(maximum) // NaN

console.log(...numbers)

let class1 = ["Anshul", "Anubhav", "Ankit"]
let class2 = ["Kabir", "Ira", "Gurkirat"]

class1.push(class2);
class1.push(...class2);
console.log(...class1);



