// function expression = function without a name (anonymous function)
//                       avoid polluting the global scope with
//                       Write it, then forget about it

/*
sayHello()

function sayHello(){
    console.log("Hello !")
}
*/

/*
const greeting = function(){
    console.log("Hello !")
}

greeting()
*/

let count = 0;

document.getElementById('increaseBtn').onclick = function(){
    count += 1
    document.getElementById('myLabel').innerHTML = count;
}

document.getElementById('increaseBtn').onclick = function(){
    count -= 1
    document.getElementById('myLabel').innerHTML = count;
}

