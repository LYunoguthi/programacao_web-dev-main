export interface ModalidadePaes {
    id: number;
    nome: string;
    vegano: boolean;
  }
  
  export interface EstoquePaes {
    id: number;
    modalidadeID: number;
    quantidade: number;
    precoVenda: number;
  }
  
  export interface ItemVenda {
    estoquePaesID: number;
    quantidade: number;
    nome?: string; // Para resposta da API
  }
  
  export interface VendaPaes {
    idVenda: number;
    cpf: string;
    itens: ItemVenda[];
    total: number;
  }
  
  // Dados em memória
  export const modalidades: ModalidadePaes[] = [];
  export const estoque: EstoquePaes[] = [];
  export const vendas: VendaPaes[] = [];