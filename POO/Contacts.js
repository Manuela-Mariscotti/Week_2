class Contacts{
    constructor(){
        this.persons = new Array;
    }

    printPersons(){
        for (let i = 0; i < this.persons.length; i++) {
            console.log(this.persons[i]) 
        }
    }
}

export {Contacts}