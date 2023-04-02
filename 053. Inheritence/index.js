// inheritance = a child class can inherit all the
//               methods and properties from another class

class Animal{
   alive = true;

   eat(){
      console.log(`This ${this.name} is eating`)
   }
   sleep(){
      console.log(`This ${this.name} is sleeping`)
   }
}

class Rabbit extends Animal{

   name = 'Rabbit'

   run(){
      console.log(`This ${this.name} is running`)
   }
}

class Fish extends Animal{

   name = 'Fish'

   swin(){
      console.log(`This ${this.name} is swimming`)
   }
}

class Hawk extends Animal{

   name = 'Hawk'

   fly(){
      console.log(`This ${this.name} is flying`)
   }
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

console.log(rabbit.alive)
rabbit.eat();
rabbit.sleep();
fish.swin()
hawk.fly();


