import { Router } from 'express';
import { getStatusController } from '../controllers/statusController';

const router = Router();

router.get('/', getStatusController);

export default router;