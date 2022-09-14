import * as loginModel from '../models/loginModel';
import IUser from '../interfaces/IUser';
import HttpException from '../shared/httpException';

const validateData = ({ username, password }: IUser): void => {
  if (!username || typeof username !== 'string') {
    throw new HttpException(400, '"username" is required');
  }
  if (!password || typeof password !== 'string') {
    throw new HttpException(400, '"password" is required');
  }
};

export const login = async (user: IUser): Promise<string> => {
  validateData(user);
  const token = await loginModel.login(user);

  return token;
};

export const oi = 'oii';