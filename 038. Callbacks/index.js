
// callback = a function passed as argument
//            to another function

//  Ensures that a funciton is not going
//  to ren before a task is completed
//  Helps us develop asynchronous code.
//  (When one funtion has to wait for another function)
//  that helps us avoid errors and potential problems
//  Ex. Wait for a file to load

/*
let total = sum(2, 3);
displayDOM(total);

function sum(x, y){
    let result = x + y
    return result
}
*/

sum(2, 3, displayConsole)
sum(2, 3, displayDOM)

function sum(x, y, callBack){
    let result = x +y;
    callBack(result);
}

function displayConsole(output){
    console.log(output);
}

function displayDOM(output){
    document.getElementById('myLabel').innerHTML = output;
}