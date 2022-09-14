import express from 'express';
import * as loginController from '../controllers/loginController';
import httpErrorMiddleware from '../middlewares/error';
import 'express-async-errors';

const router = express.Router();

router.post('/', loginController.login);
router.use(httpErrorMiddleware);

export default router;
