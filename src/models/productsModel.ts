import { ResultSetHeader } from 'mysql2';
import IProduct from '../interfaces/Iproduct';
import connection from './connection';

export const getProductById = async (id: number): Promise<IProduct> => {
  const [result] = await connection
    .execute('SELECT id, name, amount FROM Trybesmith.Products WHERE id = ?', [id]);
    
  const [product] = result as IProduct[];
  
  return product as IProduct;
};

export const createProduct = async (product: IProduct): Promise<IProduct> => {
  const [result] = await connection
    .execute<ResultSetHeader>(`
    INSERT INTO Trybesmith.Products
    (name, amount) VALUES (?, ?)`, [product.name, product.amount]);

  const productCreated = getProductById(result.insertId);
  return productCreated;
};
