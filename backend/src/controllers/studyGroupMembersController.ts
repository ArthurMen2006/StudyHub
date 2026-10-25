import { Response, Request } from "express";
import {createStudyGroupMembers, deleteStudyGroupMembers, getAllStudyGroupMembers, getStudyGroupMembersById } from "../services/studyGroupMembersService"
import { error } from "node:console";

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
    const { studyGroupId } = req.body;
    const user = req.user as {id: string}
    const studyGroupMembers = await createStudyGroupMembers( user.id, studyGroupId);
    res.status(201).json(studyGroupMembers)
}



export const deleteStudyGroupMembersController = async(req:Request, res:Response) => {
    const { id } = req.params
    const user = req.user as {id: string}
    const member = await getStudyGroupMembersById(id as string)

    if(!member){
        return res.status(404).json({error:"tarefa nao encontrada"})
    }
    if(member.userId !== user.id){
        return res.status(403).json({error:"sem permissao"})
    }
    await deleteStudyGroupMembers (id as string)
    res.status(204).send()
}