import jwt, { SignOptions } from 'jsonwebtoken';
import IUser from '../interfaces/IUser';

const getToken = (user: IUser): string => {
  const JWT_SECRET = 'minhasenha';
  const jwtConfig: SignOptions = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

  const token = jwt.sign({ data: user }, JWT_SECRET, jwtConfig);
  
  return token;
};

export default getToken;