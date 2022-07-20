export class Vector{
    private elements:number[];

    constructor(n:number,k:number){
        this.elements=[];
        for (let i = 0; i < n ; i++) {
            this.elements.push(Math.floor(Math.random()*(k+1)))
        }
    }

    public print():void{
        console.log(this.elements);
    }

    public add(v1:Vector):Vector[]{
        
        let v3=new Array;
        for (let i = 0; i < this.elements.length; i++) {
            v3.push(this.elements[i]+v1.elements[i]);
        }
        return v3;
    }

    public subs(v1:Vector):Vector[]{
        let v3 = new Array;
        for (let i = 0; i < this.elements.length; i++) {
            v3.push(this.elements[i]-v1.elements[i]);
            
        }
        return v3;
    }

    public mult(v1:Vector):Vector[]{
        let v3 = new Array;
        for (let i = 0; i < this.elements.length; i++) {
            v3.push(this.elements[i]*v1.elements[i]);
        }
        return v3;
    }

    public multNumber(n:number):Vector[]{
        let v3 = new Array;
        for (let i = 0; i < this.elements.length; i++) {
            v3.push(this.elements[i]*n);
        }
        return v3;
    }
}