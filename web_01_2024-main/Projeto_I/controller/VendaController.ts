import { Request, Response } from 'express';
import { VendaService } from '../service/VendaService';

const vendaService = new VendaService();

export const createVenda = (req: Request, res: Response) => {
  try {
    const venda = vendaService.createVenda(req.body);
    res.status(201).json(venda);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getVendaById = (req: Request, res: Response) => {
  const { id } = req.params;
  const venda = vendaService.getVendaById(Number(id));
  if (venda) {
    res.status(200).json(venda);
  } else {
    res.status(404).json({ message: 'Venda não encontrada.' });
  }
};