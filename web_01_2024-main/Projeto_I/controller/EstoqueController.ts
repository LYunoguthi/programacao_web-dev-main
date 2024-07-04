import { Request, Response } from 'express';
import { EstoqueService } from '../service/EstoqueService.ts';

const estoqueService = new EstoqueService();

export const getAllEstoque = (req: Request, res: Response) => {
  const estoque = estoqueService.getAllEstoque();
  res.status(200).json(estoque);
};

export const getEstoqueById = (req: Request, res: Response) => {
  const { id } = req.params;
  const item = estoqueService.getEstoqueById(Number(id));
  if (item) {
    res.status(200).json(item);
  } else {
    res.status(404).json({ message: 'Item de estoque não encontrado.' });
  }
};

export const createEstoque = (req: Request, res: Response) => {
  const item = estoqueService.createEstoque(req.body);
  res.status(201).json(item);
};

export const updateEstoque = (req: Request, res: Response) => {
  const updatedItem = estoqueService.updateEstoque(req.body);
  if (updatedItem) {
    res.status(200).json(updatedItem);
  } else {
    res.status(404).json({ message: 'Item de estoque não encontrado.' });
  }
};

export const deleteEstoque = (req: Request, res: Response) => {
  const { id } = req.params;
  const deletedItem = estoqueService.deleteEstoque(Number(id));
  if (deletedItem) {
    res.status(202).json(deletedItem);
  } else {
    res.status(404).json({ message: 'Item de estoque não encontrado.' });
  }
};