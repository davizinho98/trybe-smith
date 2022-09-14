import express from 'express';
import * as usersController from '../controllers/usersController';
import httpErrorMiddleware from '../middlewares/error';
import 'express-async-errors';

const router = express.Router();

router.post('/', usersController.createUser);
router.use(httpErrorMiddleware);

export default router;