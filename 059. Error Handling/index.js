// error = object with a description of 
//         something went wrong

//         Can't open a file
//         Lose connection
//         User types incorrect input
//         TypeError

// throw = executes a user-defined error


try{
   x = window.prompt("Enter a number: ")
   x = Number(x)

   if (isNaN(x)){
      throw "That wasn't a number!"
   }
   else if (x == ""){
      throw "That was empty"
   }
   else{
      console.log(`${x} is a number`)
   }

   
}
catch(error){
  console.log(error) 
}
finally{
   console.log("I am always going to be executed")
}