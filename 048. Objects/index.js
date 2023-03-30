// object = A group of properties and methods
//          properties = what an object has
//          mehtods = what an object can do
//          use . to access properties/methods

const car1 = {
   model: 'Mustang',
   color: 'red',
   year: 2023,

   drive: function(){
      console.log("You can drive the car.")
   },

   brake: function(){
      console.log("You step on brakes.")
   }
}

const car2 = {
   model: 'Corvette',
   color: 'blue',
   year: 2024,

   drive: function(){
      console.log("You can drive the car.")
   },

   brake: function(){
      console.log("You step on brakes.")
   }
}

console.log(car1.model)
console.log(car1.drive())
console.log(car1.brake)

console.log(car2.model)
console.log(car2.drive()) 
console.log(car2.brake)

