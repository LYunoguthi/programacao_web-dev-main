export class Product{
    id:number;
    name:string;
    description:string;
    price:number;
    stock:number;
    

    constructor(name:string, description:string, price:number){
        this.name = name;
        this.description = description;
        this.price = price;
        this.id = this.geraId();
    }