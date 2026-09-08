import { Router } from "express";
import { createStudyGroupController, getAllStudyGroupController, getStudyGroupByIdController, deleteStudyGroupController, updateStudyGroupController} from "../controllers/studyGroupController";

const router = Router();

router.get('/',getAllStudyGroupController);
router.get('/:id',getStudyGroupByIdController);
router.post('/', createStudyGroupController);
router.put('/:id', updateStudyGroupController);
router.delete('/:id', deleteStudyGroupController);

export default router