import {Person} from "./Person"

let persona1 = new Person("Manu",35,"Santa ceclia 1");

persona1.printName();
console.log(persona1.yearOfBirth(2022));
console.log(persona1.getAddress());
persona1.setAddress("don felipe 9");
console.log(persona1.getAddress());