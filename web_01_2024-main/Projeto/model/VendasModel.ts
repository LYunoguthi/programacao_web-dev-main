export class VendasModel{
    id:number;
    cpfcliente:number;
    valortotal:number;
    quantidade:number;

    constructor(id?:number, cpfcliente?:number, valortotal?:number, quantidade?:number){
        this.id = this.geraId() || 0;
        this.cpfcliente = cpfcliente || 0;
        this.valortotal = valortotal || 0;
        this.quantidade = quantidade || 0;
    }
    
    private geraId():number{
        return Date.now();
    }

}