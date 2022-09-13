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

export const oi = 'oii';
