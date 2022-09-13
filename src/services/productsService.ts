import * as productsModel from '../models/productsModel';
import IProduct from '../interfaces/Iproduct';

export const getProducts = async (): Promise<IProduct[]> => {
  const result = await productsModel.getProducts();

  return result;
};

export const getProductById = async (id: number): Promise<IProduct> => {
  const result = await productsModel.getProductById(id);

  return result;
};

export const createProduct = async ({ name, amount }: IProduct): Promise<object> => {
  const result = await productsModel.createProduct({ name, amount });
  
  return result;
};
