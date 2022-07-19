 class Person{
    constructor(name,weight,height,yearOfBirth){
        this.name = name;
        this.weight = weight;
        this.height = height;
        this.yearOfBirth = yearOfBirth;
        this.hobbies = new Array;
    }
    
    getIMC(){
        return this.weight/((this.height**2)/10000)
    }

    printAll(){
        //console.log(this)
        console.log(`nombre - ${this.name}`);
        console.log(`weight - ${this.weight}`);
        console.log(`height - ${this.height}`);
        console.log(`yearOfBirth - ${this.yearOfBirth}`);
        console.log(`hobbies - ${this.hobbies}`);
    }

    getAge(){
        let date = new Date().getFullYear();
        return date-this.yearOfBirth;
    }
    
    printHobbies(){
        console.log(this.hobbies) 
    }
}
export {Person}
