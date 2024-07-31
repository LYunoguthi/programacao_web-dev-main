import { ListaVendas } from "./ListaVendas";

export class VendasModel{
    id:number;
    cpfcliente:number;
    valortotal:number;
    quantidade:number;
    listaVendas:ListaVendas[];

    constructor(id?:number, cpfcliente?:number, valortotal?:number, quantidade?:number, listaVendas?: ListaVendas[]){
        this.id = this.geraId() || 0;
        this.cpfcliente = cpfcliente || 0;
        this.valortotal = valortotal || 0;
        this.quantidade = quantidade || 0;
        this.listaVendas = listaVendas || [];
    }
    
    private geraId():number{
        return Date.now();
    }

}