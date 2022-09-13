import { Request, Response } from 'express';
import * as productsService from '../services/productsService';

export const getProducts = async (_req: Request, res: Response): Promise<void> => {
  const result = await productsService.getProducts();
  
  res.status(200).json(result);
};

export const getProductById = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const result = await productsService.getProductById(Number(id));
  
  res.status(200).json(result);
};

export const createProduct = async (req: Request, res: Response): Promise<void> => {
  const result = await productsService.createProduct(req.body);
  
  res.status(201).json(result);
};
