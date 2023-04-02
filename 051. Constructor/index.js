// constructor = a special method of class,
//               accepts arguments and assigns properties


class Student{

   constructor(name, age, gpa){
         this.name = name
         this.age = age
         this.gpa = gpa
   }

   study(){
      console.log(`${this.name} is studying`)
   }
}

const student1 = new Student("Anshul", 19, 3);
const student2 = new Student("Kabir", 19, 3.5);

console.log(student1.name);
console.log(student1.age);
console.log(student1.gpa);

student1.study();




