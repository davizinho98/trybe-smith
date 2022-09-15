import jwt from 'jsonwebtoken';
import * as ordersModel from '../models/ordersModel';
import HttpException from '../shared/httpException';
import IOrder from '../interfaces/IOrder';
import { getUserByUsername } from '../models/usersModel';
import { IData } from '../middlewares/validateToken';

export const getOrders = async (): Promise<IOrder[]> => {
  const result = await ordersModel.getOrders();

  return result;
};

type Order = {
  userId: number,
  productsIds: number[],
};

type ProductsIds = {
  productsIds: number[],
};

const getId = async (token: string): Promise<number> => {
  const JWT_SECRET = 'minhasenha';
    
  const { data } = jwt.verify(token, JWT_SECRET) as IData;
  const { username } = data;
  const user = await getUserByUsername(username) as { id: number };
  
  return user.id;
};

const validateProductsIds = (productsIds: number[]): void => {
  if (!productsIds) throw new HttpException(400, '"productsIds" is required');
  if (!Array.isArray(productsIds)) throw new HttpException(422, '"productsIds" must be an array');
  if (productsIds.length === 0) {
    throw new HttpException(422, '"productsIds" must include only numbers');
  }
};

export const createOrder = async (
  { productsIds }: ProductsIds,
  token: string,
): Promise<Order> => {
  validateProductsIds(productsIds);
  
  const id = await getId(token);
  const result = await ordersModel.createOrder(productsIds, id);

  return result;
};

export const oi = 'oii';
