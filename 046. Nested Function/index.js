// nested function = Fucntions inside other funtions.
//                   Outer functions hace access to inner funciton
//                   Inner functions are 'hidden' from outside
//                   used in closures (future video topic)

let userName = "Anshul";
let userInbox = 0;

function login(){
    displayUserName()
    displayUserInbox()
    function displayUserName(){
        console.log(`Welcome ${userName}`)
    }
    
    function displayUserInbox(){
        console.log(`You have ${userInbox} new messages`)
    }
}

