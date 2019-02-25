// let currentDate = new Date(); // #238746

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

const l2cCourse = [
    new Person("Kat", 27, "HH"),
    new Person("Patrick", 32, "HH"),
    new Person("Aneesh", 31, "HH"),
    new Person("Helder", 38, "HH")
];

let youngest = l2cCourse[0];

// for (let i = 0; i < l2cCourse.length; i++) {
//     if (l2cCourse[i].age < youngest.age) {
//         youngest = l2cCourse[i];
//     }
// }

for (person of l2cCourse) {
    if (person.age < youngest.age) {
        youngest = person;
    }
    console.log(person.salutation());
}

console.log(youngest.name);