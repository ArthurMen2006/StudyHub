import { Router } from 'express';
import { getUserByIdController, getAllUserController, updateUserController, deleteUserController } from '../controllers/userController';


const router = Router();

router.get('/', getAllUserController);
router.get('/:id', getUserByIdController);
router.put('/:id',updateUserController);
router.delete('/:id',deleteUserController);

export default router;