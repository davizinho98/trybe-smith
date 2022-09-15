import express from 'express';
import * as ordersController from '../controllers/ordersController';
import validateToken from '../middlewares/validateToken';
import httpErrorMiddleware from '../middlewares/error';
import 'express-async-errors';

const router = express.Router();

router.get('/', ordersController.getOrders);
router.post('/', validateToken, ordersController.createOrder);
router.use(httpErrorMiddleware);

export default router;
