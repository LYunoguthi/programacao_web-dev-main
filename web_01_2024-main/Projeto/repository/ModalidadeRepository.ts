import { ModalidadeModel } from "../model/ModalidadeModel";

export class ModalidadeRepository {

    modalidadeList: ModalidadeModel[] = [];

    insereProduto ( modalidadeLista : ModalidadeModel ) {
        this . productList . push ( modalidadeLista ) ;
         }
        
         filtraProdutoPorId ( id : number ) : Product | undefined {
         return this . productList . find ( product = > product . id === id ) ;
         }
        
         filtraTodosProdutos () : Product []{
         return this . productList ;
         }

}