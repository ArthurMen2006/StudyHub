import { Request, Response } from 'express';
import { getStatus } from '../services/statusService';

export const getStatusController = async (req: Request, res: Response) => {
    const status = await getStatus();
    res.json(status);
}