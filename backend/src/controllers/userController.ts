import { Request, Response } from 'express';
import { createUser, getAllUser, getUserById } from '../services/userService';

export const createUserController = async (req: Request, res: Response) => {
    const { name, email } = req.body;
    const user = await createUser(name, email);
    res.status(201).json(user);
}

export const getAllUserController = async (req: Request, res: Response) => {
    const users = await getAllUser();
    res.status(200).json(users);
}

export const getUserByIdController = async (req: Request, res: Response) => {
    const { id } = req.params;
    const user = await getUserById(id as string);
    res.status(200).json(user);
}