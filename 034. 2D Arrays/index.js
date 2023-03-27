
// 2D Array = An Array of Arrays

let fruits = ['apple', 'oranges', 'banana'];
let vegetables = ['carrot', 'onions', 'potatoes'];
let meats = ['eggs', 'chicken', 'fish']

// groceryList[0][0] = 'mangoes';
// groceryList[0][2] = 'mangoes';
// groceryList[2][0] = 'steak';
groceryList[2][2] = 'steak';


let groceryList = [fruits, vegetables, meats];

for (let list of groceryList){
    for (let food of list){
        console.log(food);
    }
}