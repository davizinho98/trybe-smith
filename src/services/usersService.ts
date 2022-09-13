import * as usersModel from '../models/usersModel';
import IUser from '../interfaces/IUser';

export const createUser = async (
  { username, classe, level, password }: IUser,
): Promise<string> => {
  const token = await usersModel.createUser({ username, classe, level, password });

  return token;
};

export const oi = 'oii';
