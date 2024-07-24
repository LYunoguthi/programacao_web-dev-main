export class EstoqueModel{
    id:number;
    modalidade:number;
    quantidade:number;
    precovenda:number;


    constructor(id?:number,modalidade?:number, quantidade?:number, precovenda?:number){
        this.id = this.geraId() || 0;
        this.modalidade = modalidade || 0;
        this.quantidade = quantidade || 0;
        this.precovenda = precovenda || 0;
    }

    private geraId():number{
        return Date.now();
    }

}