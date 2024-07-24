export class ListaVendas{
    id:number;
    quantidade:number;
    nome:string;

    constructor(id?:number, quantidade?:number, nome?:string){
        this.id = this.geraId() || 0;
        this.quantidade = quantidade || 0;
        this.nome = nome || '';
    }
    
    private geraId():number{
        return Date.now();
    }

}