// ternary operator = delimited with (`)
//                    instead of double of single quotes
//                    allows embedded variables and expressions

let userName = 'Anshul';
let items = 3;
let total = 75;

// console.log("Hello", userName);
// console.log("You have", items, "items in your cart");
// console.log("Your total is $", total)

// console.log(`Hello ${userName}`);
// console.log(`You have ${items} items in your cart`);
// console.log(`Your toal is $${total}`);

let text = `Hello ${userName}. You have ${items}
            items in your cart.
            Your toal is $${total}`

// console.log(text)

document.getElementById("myLabel").innerHTML = text;