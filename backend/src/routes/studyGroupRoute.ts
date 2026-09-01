import { Router } from "express";
import { createStudyGroupController, getAllStudyGroupController, getStudyGroupByIdController} from "../controllers/studyGroupController";

const router = Router();

router.post('/', createStudyGroupController);
router.get('/',getAllStudyGroupController);
router.get('/:id',getStudyGroupByIdController)

export default router