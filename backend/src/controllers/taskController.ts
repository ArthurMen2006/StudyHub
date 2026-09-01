import { Request, Response } from "express";
import {getAllTask, getTaskById, createTask } from '../services/taskService'



export const createTaskController = async(req:Request, res:Response)=>{
    const {title, description, userId} = req.body;
    const task= await createTask (title, description, userId);
    res.status(201).json(task);
}

export const getAllTaskController = async(req:Request, res: Response)=>{
    const tasks = await getAllTask()
    res.status(201).json(tasks)
}

export const getTaskByIdController = async(req:Request, res: Response)=>{
    const { id } = req.params
    const task = await getTaskById(id as string)
    res.status(201).json(task)
}