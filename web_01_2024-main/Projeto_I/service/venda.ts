import { VendaPaes, vendas, EstoquePaes, estoque, ItemVenda } from '../models';

export class VendaService {
  createVenda(venda: Omit<VendaPaes, 'idVenda' | 'total'>) {
    const newVenda = { idVenda: vendas.length + 1, ...venda, total: 0 };
    newVenda.total = venda.itens.reduce((acc, item) => {
      const estItem = estoque.find(e => e.id === item.estoquePaesID);
      if (estItem) {
        if (estItem.quantidade < item.quantidade) {
          throw new Error(`Saldo insuficiente para o item ${item.estoquePaesID}`);
        }
        estItem.quantidade -= item.quantidade;
        item.nome = estItem.modalidadeID;
        acc += item.quantidade * estItem.precoVenda;
      }
      return acc;
    }, 0);
    vendas.push(newVenda);
    return newVenda;
  }

  getVendaById(id: number) {
    return vendas.find(v => v.idVenda === id);
  }
}
