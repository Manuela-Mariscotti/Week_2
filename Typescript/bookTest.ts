import {Book} from "./Book";

let book1 = new Book("TITULO",111,"XXX-XXX","AUTOR","EDITORIAL");

book1.toString();

console.log(book1.getTitle());
console.log(book1.getNPages());
console.log(book1.getIsbn());
console.log(book1.getAuthor());
console.log(book1.getEditorial());

book1.setTitle("Alicia en el pais de las Maravillas");
book1.setNPages(159);
book1.setIsbn("1123963-HG88951");
book1.setAuthor("Lewis Carrol");
book1.setEditorial("Penguin House");

console.log(book1.getTitle());
console.log(book1.getNPages());
console.log(book1.getIsbn());
console.log(book1.getAuthor());
console.log(book1.getEditorial());

book1.toString();