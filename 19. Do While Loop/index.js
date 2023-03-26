// do while loop = repeat something
//                 then check the condition,
//                 repeat if the condition is true

let userName;

do{
    userName = window.prompt("Enter your name");
}while(userName == "" || userName == null)

console.log("Hello", userName)

