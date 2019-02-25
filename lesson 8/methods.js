// let currentDate = new Date(); // #238746

class Person {
    constructor(name, birthday, city) {
        this.name = name;
        this.birthday = birthday;
        this.city = city;
    }

    age() {
        // CALCULATE AGE BASED ON BIRTHDAY AND RETURN A NUMBER (YEARS OLD)
        const mili = Date.now() - this.birthday.getTime();
        return new Date(mili).getUTCFullYear() - 1970;
    }
 
    salutation() {
        return "Hello my name is " + this.name;
    }
 }
 
 const l2cCourse = [
     new Person("Kat", new Date("1991-04-18"), "HH"),     // 18TH APRIL 1991
     new Person("Patrick", new Date("1986-07-02"), "HH"),  // 2ND JUL 1986
     new Person("Aneesh", new Date("1987-11-22"), "HH"),   // 22ND NOV 1987
     new Person("Helder", new Date("1981-01-27"), "HH")   // 27TH JAN 1981
 ];

 for (person of l2cCourse) {
     console.log(person.age());
 }