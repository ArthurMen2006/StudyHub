import { Request, Response } from "express";
import {createStudyGroup, deleteStudyGroup, getAllStudyGroup, getStudyGroupById, updateStudyGroup} from "../services/studyGroupService"

export const getAllStudyGroupController = async(req:Request, res:Response) =>{
    const studyGroup = await getAllStudyGroup()
    res.status(200).json(studyGroup)
}

export const getStudyGroupByIdController = async (req:Request, res: Response) =>{
    const { id } = req.params
    const studyGroup = await getStudyGroupById(id as string)
    res.status(200).json(studyGroup )
}

export const createStudyGroupController = async (req: Request, res: Response) =>{
    const {name, description} = req.body
    const studyGroup = await createStudyGroup(name,description)
    res.status(201).json(studyGroup)
}

export const updateStudyGroupController = async (req:Request, res:Response) =>{
    const { id } = req.params
    const {name, description} = req.body
    const studyGroup = await updateStudyGroup(id as string, name, description)
    res.status(200).json(studyGroup)
}

export const deleteStudyGroupController = async (req:Request, res:Response) =>{
    const { id } = req.params
    const studyGroup = await deleteStudyGroup (id as string)
    res.status(204).json(studyGroup)
}