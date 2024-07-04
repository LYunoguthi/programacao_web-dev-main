import { ModalidadePaes, modalidades } from '../models';

export class ModalidadeService {
  getAllModalidades() {
    return modalidades;
  }

  getModalidadeById(id: number) {
    return modalidades.find(m => m.id === id);
  }

  createModalidade(modalidade: Omit<ModalidadePaes, 'id'>) {
    const newModalidade = { id: modalidades.length + 1, ...modalidade };
    modalidades.push(newModalidade);
    return newModalidade;
  }

  updateModalidade(updatedModalidade: ModalidadePaes) {
    const index = modalidades.findIndex(m => m.id === updatedModalidade.id);
    if (index !== -1) {
      modalidades[index] = updatedModalidade;
      return updatedModalidade;
    }
    return null;
  }

  deleteModalidade(id: number) {
    const index = modalidades.findIndex(m => m.id === id);
    if (index !== -1) {
      return modalidades.splice(index, 1)[0];
    }
    return null;
  }
}