import { Book } from "./Book";
import { Library } from "./Library";

let book1 = new Book("Alicia en el pais de las Maravillas",144,"954899123-71125","Lewis Carrol","PENGUIN RANDOM HOUSE");
let book2 = new Book("La conjura de los necios",378,"44444495-ER25885","John Kennedy Toole","ANAGRAMA");
let book3 = new Book("Cien años de soledad",471,"400548988-SF77104","Gabriel García Márquez","RAE");
let book4 = new Book ("Crónica de una muerte anunciada",144,"97884975-92437","Gabriel García Márquez","DEBOLSILLO");

let library1 = new Library("Av. Parque Rivadavia 1473","Agusto Figueroa");

library1.setBooks(book1);
library1.setBooks(book2);
library1.setBooks(book3);
library1.setBooks(book4);

library1.toString();

console.log(library1.findByAuthor("Gabriel García Márquez"));