import { Request, NextFunction, Response } from "express";
import Joi from "joi";

export function validateSchema(schema: Joi.ObjectSchema) {
    return async (req: Request, res: Response, next: NextFunction) => {
        const result = await schema.validateAsync(req.body,  { abortEarly: false });
        if (result) {
            next();
        } else {
            res.status(400).send("Invalid request");
        }
    };
}
