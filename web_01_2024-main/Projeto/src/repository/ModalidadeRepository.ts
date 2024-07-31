import { ModalidadeModel } from "../model/ModalidadeModel";

export class ModalidadeRepository {

    modalidadeLista: ModalidadeModel[] = [];

    insereProduto ( modalidadeLista : ModalidadeModel ) {
        this . modalidadeLista . push ( modalidadeLista ) ;
    }
        
    filtraProdutoPorId ( id : number ) : ModalidadeModel | undefined {
        return this . modalidadeLista . find ( ModalidadeModel => ModalidadeModel.id === id ) ;
    }

    filtraProdutoPorNomeId(id: number, name:string): ModalidadeModel | undefined{
        return this.modalidadeLista.find(ModalidadeModel => ModalidadeModel.name === name && ModalidadeModel.id === id);
    }

    filtraTodosProdutos () : ModalidadeModel []{
        return this . modalidadeLista ;
    }

    deletaProduto(modalidadeLista:ModalidadeModel){
        const index = this.modalidadeLista.indexOf(modalidadeLista);
        if (index !== -1) {
            this.modalidadeLista.splice(index, 1);
        }
    }

    atualizaProduto(modalidadeLista:ModalidadeModel): number{
        const index = this.modalidadeLista.indexOf(modalidadeLista);
        if(index !== -1){
            this.modalidadeLista[index] = modalidadeLista;
        }
        return index;
    }

}
