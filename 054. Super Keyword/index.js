// super = Refers to the parent class.
//         Commonly used to invoke constructor of a parent class.

class Animal{

   constructor(name, age){
      this.name = name
      this.age = age
   }

}

class Rabbit extends Animal{

   constructor(name, age, runSpeed){
      super(name, age)
      this.runSpeed = runSpeed
   }

}

class Fish extends Animal{

   constructor(name, age, swimSpeed){
      super(name, age)
      this.swimSpeed = swimSpeed
   }

}

class Hawk extends Animal{

   constructor(name, age, flySpeed){
      super(name, age)
      this.flySpeed = flySpeed
   }

}

const rabbit = Rabbit('rabbit', 1, 40)
const fish = Rabbit('fish', 2, 80)
const hawk = Rabbit('hawk', 3, 200)




