import { Request, Response } from "express";
import {getAllTask, getTaskById, createTask, updateTask, deleteTask } from '../services/taskService'

export const getAllTaskController = async(req:Request, res: Response)=>{
    const tasks = await getAllTask()
    res.status(200).json(tasks)
}

export const getTaskByIdController = async(req:Request, res: Response)=>{
    const { id } = req.params
    const task = await getTaskById(id as string)
    res.status(200).json(task)
}

export const createTaskController = async(req:Request, res:Response)=>{
    const {title, description, userId} = req.body;
    const task= await createTask (title, description, userId);
    res.status(201).json(task);
}

export const updateTaskController = async(req:Request, res:Response) =>{
    const { id } = req.params
    const {title,description} = req.body
    const task = await updateTask(id as string, title,description)
    res.status(200).json(task)
}

export const deleteTaskController = async(req:Request, res:Response) =>{
    const { id } = req.params
    const task = await deleteTask(id as string)
    res.status(204).json(task)
}