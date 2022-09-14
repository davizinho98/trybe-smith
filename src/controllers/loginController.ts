import { Request, Response } from 'express';
import * as loginService from '../services/loginService';

export const login = async (req: Request, res: Response): Promise<void> => {
  const token = await loginService.login(req.body);
  
  res.status(200).json({ token });
};

export const oi = 'oii';