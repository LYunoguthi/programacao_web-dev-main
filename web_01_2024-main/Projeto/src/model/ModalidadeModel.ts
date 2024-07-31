export class ModalidadeModel{
    id:number;
    name:string;
    price:number;
    vegano:string;
    

    constructor(id?:number, name?:string, price?:number, vegano?:string){
        this.name = name || '';
        this.price = price || 0;
        this.vegano = vegano || '';
        this.id = this.geraId() || 0;
    }

    private geraId():number{
        return Date.now();
    }
}