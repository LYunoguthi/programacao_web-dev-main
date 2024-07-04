import { EstoquePaes, estoque, ModalidadePaes, modalidades } from '../models';

export class EstoqueService {
  getAllEstoque() {
    return estoque;
  }

  getEstoqueById(id: number) {
    return estoque.find(e => e.id === id);
  }

  createEstoque(item: Omit<EstoquePaes, 'id'>) {
    const newItem = { id: estoque.length + 1, ...item };
    estoque.push(newItem);
    return newItem;
  }

  updateEstoque(updatedItem: EstoquePaes) {
    const index = estoque.findIndex(e => e.id === updatedItem.id);
    if (index !== -1) {
      estoque[index] = updatedItem;
      return updatedItem;
    }
    return null;
  }

  deleteEstoque(id: number) {
    const index = estoque.findIndex(e => e.id === id);
    if (index !== -1) {
      return estoque.splice(index, 1)[0];
    }
    return null;
  }
}