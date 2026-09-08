import { Response, Request } from "express";
import {createStudyGroupMembers, deleteStudyGroupMembers,updateStudyGroupMembers, getAllStudyGroupMembers, getStudyGroupMembersById } from "../services/studyGroupMembersService"

export const getAllStudyGroupMembersController = async(req: Request, res: Response) =>{
    const studyGroupMembers = await getAllStudyGroupMembers()
    res.status(200).json(studyGroupMembers)
}

export const getStudyGroupMembersByIdController = async(req:Request, res:Response) =>{
    const {id} = req.params
    const studyGroupMembers = await getStudyGroupMembersById(id as string)
    res.status(200).json(studyGroupMembers)
}

export const createStudyGroupMembersController = async(req:Request, res:Response) =>{
    const { userId,studyGroupId } = req.body;
    const studyGroupMembers = await createStudyGroupMembers( userId, studyGroupId);
    res.status(201).json(studyGroupMembers)
}

export const updateStudyGroupMembersController = async(res:Response, req:Request) => {
    const { id } = req.params
    const { userId, studyGroupId } = req.body
    const studyGroupMembers = await updateStudyGroupMembers (id as string, userId, studyGroupId)
    res.status(200).json(studyGroupMembers)
}

export const deleteStudyGroupMembersController = async(req:Request, res:Response) => {
    const { id } = req.params
    const studyGroupMembers = await deleteStudyGroupMembers(id as string)
    res.status(204).json(studyGroupMembers)
}