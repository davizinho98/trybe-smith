import connection from './connection';
import IOrder from '../interfaces/IOrder';

// JSON_ARRAYAGG: https://dev.mysql.com/doc/refman/5.7/en/aggregate-functions.html#function_json-arrayagg

export const getOrders = async (): Promise<IOrder[]> => {
  const [result] = await connection.execute(`
  SELECT o.id, o.userId, JSON_ARRAYAGG(p.id) AS productsIds
  FROM Trybesmith.Products AS p
  INNER JOIN Trybesmith.Orders AS o ON o.id = p.orderId
  GROUP BY o.id
  ORDER BY o.userId`);
  return result as IOrder[];
};

type Order = {
  userId: number,
  productsIds: number[],
};

export const createOrder = async (productsIds: number[], id: number): Promise<Order> => {
  const [result] = await connection.execute(`
  INSERT INTO Trybesmith.Orders (userId) VALUES (?)`, [id]);

  const { insertId } = result as { insertId: number };

  await Promise.all(productsIds.map(async (productId: number) => {
    await connection.execute(
      'UPDATE Trybesmith.Products SET orderId = ? WHERE id = ?',
      [insertId, productId],
    );
  }));
  return { userId: id, productsIds };
};

export const oi = 'oii';
