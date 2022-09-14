import * as usersModel from '../models/usersModel';
import IUser from '../interfaces/IUser';
import HttpException from '../shared/httpException';

const validateUsername = (name: string) => {
  if (!name) {
    throw new HttpException(400, '"username" is required');
  }
  if (typeof name !== 'string') {
    throw new HttpException(422, '"username" must be a string');
  }
  if (name.length < 3) {
    throw new HttpException(422, '"username" length must be at least 3 characters long');
  }
};

const validateClasse = (classe: string): void => {
  if (!classe) {
    throw new HttpException(400, '"classe" is required');
  }
  if (typeof classe !== 'string') {
    throw new HttpException(422, '"classe" must be a string');
  }
  if (classe.length < 3) {
    throw new HttpException(422, '"classe" length must be at least 3 characters long');
  }
};

const validateLevel = (level: number): void => {
  if (!level && level !== 0) {
    throw new HttpException(400, '"level" is required');
  }
  if (typeof level !== 'number') {
    throw new HttpException(422, '"level" must be a number');
  }
  if (level < 1) {
    throw new HttpException(422, '"level" must be greater than or equal to 1');
  }
};

const validatePassword = (password: string): void => {
  if (!password) {
    throw new HttpException(400, '"password" is required');
  }
  if (typeof password !== 'string') {
    throw new HttpException(422, '"password" must be a string');
  }
  if (password.length < 8) {
    throw new HttpException(422, '"password" length must be at least 8 characters long');
  }
};

export const createUser = async (
  { username, classe, level, password }: IUser,
): Promise<string> => {
  validateUsername(username);
  validateClasse(classe);
  validateLevel(level);
  validatePassword(password);

  const token = await usersModel.createUser({ username, classe, level, password });

  return token;
};

export const oi = 'oii';
