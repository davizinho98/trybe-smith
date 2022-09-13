import * as ordersModel from '../models/ordersModel';
import IOrder from '../interfaces/IOrder';

export const getOrders = async (): Promise<IOrder[]> => {
  const result = await ordersModel.getOrders();

  return result;
};

export const oi = 'oii';
