import { Request, Response } from 'express';
import * as usersService from '../services/usersService';

export const createUser = async (req: Request, res: Response): Promise<void> => {
  const token = await usersService.createUser(req.body);
  
  res.status(201).json({ token });
};

export const oi = 'oii';
