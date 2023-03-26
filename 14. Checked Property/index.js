
document.getElementById('myButton').onclick = function(){
    const myCheckBox = document.getElementById('myCheckBox')
    const visaBtn = document.getElementById('visaBtn')
    const mastercardBtn = document.getElementById('mastercardBtn')
    const rupayBtn = document.getElementById('rupayBtn')
   if (myCheckBox.checked){
    console.log("You are Subscribed")
   }
   else{
    console.log("You are not Subscribed")
   }

   if(visaBtn.checked){
    console.log("You are paying with a Visa!")
   }
   else if(mastercardBtn.checked){
    console.log("You are paying with a Master Card!")
   }
   else if(rupayBtn.checked){
    console.log("You are paying with a Rupay!")
   }
   else {
    console.log("You must select a Payment type.")
   }

}