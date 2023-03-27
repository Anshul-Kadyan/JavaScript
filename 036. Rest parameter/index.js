
// rest parameter = represents an indefinite number
// ...              of parameters
//                  (packs argmunet into an array)


let a = 1;
let b = 2;
let c = 3;
let d = 4;
let e = 5;

/*

console.log(sum2(a,b));

function sum2(a, b){
    return a + b
}

console.log(sum3(a,b,c));

function sum3(a, b, c){
    return a + b + c
}

console.log(sum4(a,b,c,d));

function sum4(a, b, c,d){
    return a + b + c + d
}

*/

console.log(sum(a, b));

function sum(x, y, ...numbers){
    let total = 0
    for (let number in numbers){
        total += number
    }
}

