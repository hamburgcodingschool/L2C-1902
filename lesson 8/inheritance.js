
class Person {
   constructor(name, age, city) {
       this.name = name;
       this.age = age;
       this.city = city;
   }

   salutation() {
       return "Hello my name is " + this.name;
   }
}

class Student extends Person {
    constructor(name, age, city, course) {
        super(name, age, city);
        this.course = course;
        this.grade = 0;
    }
}

class Trainer extends Person {
    constructor(name, age, city) {
        super(name, age, city);
        this.bonus = 0;
    }
}

const l2cCourse = [
    new Student("Kat", 27, "HH", "L2C"),
    new Student("Patrick", 32, "HH", "L2C"),
    new Student("Aneesh", 31, "HH", "L2C"),
    new Trainer("Helder", 38, "HH")
];


for (person of l2cCourse) {
    if (person instanceof Student) {
        console.log(person.name + " is a Student");
    }
    if (person instanceof Trainer) {
        console.log(person.name + " is a Trainer");
    }
}