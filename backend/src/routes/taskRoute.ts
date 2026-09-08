import { createTaskController, getAllTaskController, getTaskByIdController, deleteTaskController, updateTaskController} from '../controllers/taskController'
import { Router } from 'express'

const router = Router();

router.get('/', getAllTaskController);
router.get('/:id',getTaskByIdController);
router.post('/',createTaskController);
router.put('/:id',updateTaskController);
router.delete('/:id', deleteTaskController);

export default router