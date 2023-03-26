// switch = statement that examines a value
//          for a match against many case clauses.
//          More efficient than many "else if " statements

let grade = "A";

/*
if (grade == "A"){
    console.log("You did great!")
}
else if (grade == "B"){
    console.log("You did good!")
}
else if (grade == "C"){
    console.log("You did okay!")
}
else if (grade == "D"){
    console.log("You passed barely!")
}
else if (grade == "F"){
    console.log("You failed!")
}
else{
    console.log(grade, "is not a letter grade!")
} 
*/

switch(grade){
    case "A":
        console.log("You did great!");
        break;
    case "B":
        console.log("You did good!");
        break;
    case "C":
        console.log("You did okay!");
        break;
    case "D":
        console.log("You passed barely!");
        break;
    case "F":
        console.log("You failed!");
        break;
    default:
        console.log(grade, "is not a letter grade!")

}