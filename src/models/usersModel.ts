import { ResultSetHeader } from 'mysql2';
import IUser from '../interfaces/IUser';
import getToken from '../utils/getToken';
import connection from './connection';

export const createUser = async (user: IUser): Promise<string> => {
  const { username, classe, level, password } = user;
  await connection
    .execute<ResultSetHeader>(`
    INSERT INTO Trybesmith.Users
    (username, classe, level, password)
    VALUES (?, ?, ?, ?)`, [username, classe, level, password]);

  const token = getToken(user);
  return token;
};

export const oi = 'oii';
