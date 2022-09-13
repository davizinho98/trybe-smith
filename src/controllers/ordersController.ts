import { Request, Response } from 'express';
import * as ordersService from '../services/ordersService';

export const getOrders = async (_req: Request, res: Response): Promise<void> => {
  const result = await ordersService.getOrders();
  
  res.status(200).json(result);
};

export const oi = 'oii';