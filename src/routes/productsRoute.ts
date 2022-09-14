import express from 'express';
import * as productsController from '../controllers/productsController';
import httpErrorMiddleware from '../middlewares/error';
import 'express-async-errors';

const router = express.Router();

router.get('/', productsController.getProducts);
router.get('/:id', productsController.getProductById);
router.post('/', productsController.createProduct);
router.use(httpErrorMiddleware);

export default router;