import {Book} from "./Book";

export class Library{
    private books:Book[];
    private address:string;
    private manager:string;

    constructor(address:string,manager:string){
        this.books=[];
        this.address=address;
        this.manager=manager;
    }

    public getAddress():string{
        return this.address;
    }

    public getManager():string{
        return this.manager;
    }

    public setAddress(address:string):void{
        this.address = address;
    }

    public setMananger(manager:string):void{
        this.address = manager;
    }
    public setBooks(books:Book):void{
        this.books.push(books)
    }

    public toString():string{
        let currentBook;
        for (let i = 0; i < this.books.length; i++) {
            currentBook = this.books[i].toString();
        }
        return currentBook;
    }

    public getNumberOfBooks():number{
        return this.books.length;
    }

    public findByAuthor(author:string):Book[]{
        let currentAuthor;
        let listOfAuthors=new Array;
        for (let i = 0; i < this.books.length; i++) {
            currentAuthor = this.books[i].getAuthor();
            if(currentAuthor == author){
                listOfAuthors.push(this.books[i]);
            }
        }
        return listOfAuthors;
    }
}