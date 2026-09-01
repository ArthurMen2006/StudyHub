import { Request, Response } from "express";
import {createStudyGroup, getAllStudyGroup, getStudyGroupById} from "../services/studyGroupService"
import { get } from "node:http";

export const createStudyGroupController = async (req: Request, res: Response) =>{
    const {name, description,taskId} = req.body
    const studyGroup = await createStudyGroup(name,description)
    res.status(201).json(studyGroup)
}

export const getAllStudyGroupController = async(req:Request, res:Response) =>{
    const studyGroup = await getAllStudyGroup()
    res.status(201).json(studyGroup)
}

export const getStudyGroupByIdController = async (req:Request, res: Response) =>{
    const { id } = req.params
    const studyGroup = await getStudyGroupById(id as string)
    res.status(201).json(studyGroup )
}