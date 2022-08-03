import { Request, Response } from 'express';
import * as authServices from '../services/authServices.js';

export async function signin(req: Request, res: Response) {
    const { email, password } = req.body;
    const token = await authServices.signin(email, password);
    res.status(200).send({ token });
}