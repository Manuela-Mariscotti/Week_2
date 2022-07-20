import {Contacts} from "./Contacts"
import {Person} from "./Person"

let persona1 = new Person("Manu",35,"Santa ceclia, 1");
let persona2 = new Person("Alicia",10,"c/del Aburrimiento");
let persona3 = new Person("Conejo Blanco",50,"Pais de las maravillas");

let contacto = new Contacts;
contacto.people.push(persona1);
contacto.people.push(persona2);
contacto.people.push(persona3);
contacto.printCalendar();