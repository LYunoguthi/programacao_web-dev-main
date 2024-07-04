import { Request, Response } from 'express';
import { ModalidadeService } from '../service/ModalidadeService.ts';

const modalidadeService = new ModalidadeService();

export const getAllModalidades = (req: Request, res: Response) => {
  const modalidades = modalidadeService.getAllModalidades();
  res.status(200).json(modalidades);
};

export const getModalidadeById = (req: Request, res: Response) => {
  const { id } = req.params;
  const modalidade = modalidadeService.getModalidadeById(Number(id));
  if (modalidade) {
    res.status(200).json(modalidade);
  } else {
    res.status(404).json({ message: 'Modalidade não encontrada.' });
  }
};

export const createModalidade = (req: Request, res: Response) => {
  const modalidade = modalidadeService.createModalidade(req.body);
  res.status(201).json(modalidade);
};

export const updateModalidade = (req: Request, res: Response) => {
  const updatedModalidade = modalidadeService.updateModalidade(req.body);
  if (updatedModalidade) {
    res.status(200).json(updatedModalidade);
  } else {
    res.status(404).json({ message: 'Modalidade não encontrada.' });
  }
};

export const deleteModalidade = (req: Request, res: Response) => {
  const { id } = req.params;
  const deletedModalidade = modalidadeService.deleteModalidade(Number(id));
  if (deletedModalidade) {
    res.status(202).json(deletedModalidade);
  } else {
    res.status(404).json({ message: 'Modalidade não encontrada.' });
  }
};