import * as productsModel from '../models/productsModel';
import IProduct from '../interfaces/Iproduct';
import HttpException from '../shared/httpException';

export const getProducts = async (): Promise<IProduct[]> => {
  const result = await productsModel.getProducts();

  return result;
};

export const getProductById = async (id: number): Promise<IProduct> => {
  const result = await productsModel.getProductById(id);

  return result;
};

const validateName = (name: string): void => {
  if (!name) {
    throw new HttpException(400, '"name" is required');
  }
  if (typeof name !== 'string') {
    throw new HttpException(422, '"name" must be a string');
  }
  if (name.length < 3) {
    throw new HttpException(422, '"name" length must be at least 3 characters long');
  }
};

const validateAmount = (amount: string): void => {
  if (!amount) {
    throw new HttpException(400, '"amount" is required');
  }
  if (typeof amount !== 'string') {
    throw new HttpException(422, '"amount" must be a string');
  }
  if (amount.length < 3) {
    throw new HttpException(422, '"amount" length must be at least 3 characters long');
  }
};

export const createProduct = async ({ name, amount }: IProduct): Promise<object> => {
  validateName(name);
  validateAmount(amount);
  const result = await productsModel.createProduct({ name, amount });
  
  return result;
};
