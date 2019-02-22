const person1 = {
    "name": "Joe",
    "age": 21,
    "city": "Hamburg",
    "salutation": function() {
        return "Hello my name is " + this.name;
    }
};


console.log(person1.salutation());

person1.name = "Joseph";

console.log(person1.salutation());

const names = ["Joe", "Rick", "Donald"];

person1.name = names[0] ;
names[0] = "Ted";

console.log(names);
console.log(person1);
