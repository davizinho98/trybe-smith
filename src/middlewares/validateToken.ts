import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { getUserByUsername } from '../models/usersModel';

export interface IData {
  data: {
    username: string;
    password: string;
  }
}

const validateToken = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<Response | undefined> => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const JWT_SECRET = 'minhasenha';
    
    const { data } = jwt.verify(token, JWT_SECRET) as IData;
    const { username } = data;
    await getUserByUsername(username);

    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

export default validateToken;
