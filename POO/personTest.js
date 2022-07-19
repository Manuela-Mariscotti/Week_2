import {Person} from "./Person.js";

let persona1 = new Person ("Manuela",57,160,1987);
console.log(persona1.getIMC());
console.log(persona1.getAge());
persona1.hobbies.push("dibujar","caminar","programar");
persona1.printHobbies();
persona1.printAll();