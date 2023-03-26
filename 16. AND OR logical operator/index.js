// Gives us the ability to check more than 1 condition concurrently
// && AND (BOTH conditions must be true)
// || OR  (EITHER conditions must be ture)

let temp = 15;

/*
    if (temp >0 && temp < 30){
        console.log("The weather is good!")
    }
    else{
        console.log("The weather is bad!")
    }
*/


if (temp <= 0 || temp >= 30){
    console.log("The weather is bad!")
}
else{
    console.log("The weather is good!")
}