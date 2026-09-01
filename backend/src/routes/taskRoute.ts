import { createTaskController, getAllTaskController, getTaskByIdController} from '../controllers/taskController'
import { Router } from 'express'

const router = Router()

router.post('/',createTaskController);
router.get('/', getAllTaskController);
router.get('/:id',getTaskByIdController)

export default router