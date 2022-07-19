import {Contacts} from "./Contacts.js";
import {Person} from "./Person.js";

let persona1 = new Person ("Manuela",57,160,1987);
let persona2 = new Person ("Alicia",43,145,1863);
let persona3 = new Person ("Cristina",65,169,1953);

persona1.hobbies.push("dibujar","programar");
persona2.hobbies.push("jugar","cantar");
persona3.hobbies.push("leer","conversar");

let contactos1 = new Contacts;
contactos1.persons.push(persona1,persona2,persona3);
contactos1.printPersons();