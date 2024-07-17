export class Paes{
    id:number;
    name:string;
    price:number;
    vegano:string;
    

    constructor(name:string, price:number, vegano:string){
        this.name = name;
        this.price = price;
        this.vegano = vegano;
        this.id = this.geraId();
    }

    private geraId():number{
        return Date.now();
    }
}

export class Estoque{
    id:number;
    quantidade:number;

    constructor(quantidade:number){
        this.quantidade = quantidade;
        this.id = 
    }
    
}