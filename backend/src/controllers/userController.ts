import { Request, Response } from 'express';
import { createUser, deleteUser, getAllUser, getUserById, updateUser } from '../services/userService';

export const getAllUserController = async (req: Request, res: Response) => {
    const users = await getAllUser();
    res.status(200).json(users);
}

export const getUserByIdController = async (req: Request, res: Response) => {
    const { id } = req.params;
    const user = await getUserById(id as string);
    res.status(200).json(user);
}

export const createUserController = async (req: Request, res: Response) => {
    const { name, email } = req.body;
    const user = await createUser(name, email);
    res.status(201).json(user);
}

export const updateUserController = async (req: Request, res: Response) => {
    const { id } = req.params
    const { name, email } = req.body
    const user = await updateUser(id as string, name, email)
    res.status(200).json(user)
}

export const deleteUserController = async (req:Request, res: Response) => {
    const { id } = req.params
    const user = await deleteUser(id as string)
    res.status(204).json(user)
}