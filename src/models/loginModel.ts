import connection from './connection';
import IUser from '../interfaces/IUser';
import getToken from '../utils/getToken';
import HttpException from '../shared/httpException';

export const login = async (user: IUser): Promise<string> => {
  const [result] = await connection.execute<[]>(`
  SELECT * FROM Trybesmith.Users
  WHERE username = ? AND password = ?`, [user.username, user.password]);

  if (result.length === 0) throw new HttpException(401, 'Username or password invalid');
  
  const token = getToken(user);

  return token;
};

export const oi = 'oii';
