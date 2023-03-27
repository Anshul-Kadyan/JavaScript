// array.forEach() = executes a provided callback funtion
//                   once for each array element

let studets = ['ira', 'anshul', 'kabir'];

studets.forEach(capitalize)
studets.forEach(print)

function capitalize(element, index, array){
    array[index] = element[0].toUpperCase() + element.substring(1);  
}

function print(element){
    console.log(element)
}

console.log(studets[0]);