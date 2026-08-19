import { Router } from 'express';
import { createUserController, getUserByIdController, getAllUserController } from '../controllers/userController';

const router = Router();

router.post('/', createUserController);
router.get('/', getAllUserController);
router.get('/:id', getUserByIdController);

export default router;