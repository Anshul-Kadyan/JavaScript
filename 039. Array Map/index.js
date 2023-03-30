// array.map() = executes a provided callback function
//               once for each array element
//               AND creates a new array

let numbers = [1, 2, 3, 4, 5];
let saqures = numbers.map(saqure);
let cubes = numbers.map(cube);

saqures.forEach(print)

function saqure(element) {
    return Math.pow(element, 2)
}

function cube(element) {
    return Math.pow(element, 3)
}

function print(element){
    console.log(element)
}


