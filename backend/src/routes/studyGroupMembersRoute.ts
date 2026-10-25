import { Router } from "express";
import {createStudyGroupMembersController, deleteStudyGroupMembersController, getAllStudyGroupMembersController, getStudyGroupMembersByIdController} from "../controllers/studyGroupMembersController";

const router = Router();

router.get("/",getAllStudyGroupMembersController);
router.get("/:id",getStudyGroupMembersByIdController);
router.post("/",createStudyGroupMembersController);

router.delete('/:id',deleteStudyGroupMembersController);

export default router