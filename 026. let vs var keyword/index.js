// variable scope = where a variable is accesible

// let = variables are limited to block scope {}
// var = variables are limited to a function(){}

// global variable = is declared outside any function
// (if global, var will CHANGE browser's window properties)

/*
    for(let i = 1; i<=3; i+=1){
        console.log(i);
    }

    console.log(i);
*/

/*
    for(var i = 1; i<=3; i+=1){
        console.log(i);
    }

    console.log(i);
*/

doSomthing();
function doSomthing(){
    for(let i = 1; i<=3; i+=1){
        // console.log(i)
    }
}
console.log(i)
