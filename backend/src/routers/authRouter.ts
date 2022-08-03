import { Router } from "express";
import { validateSchema } from "../middlewares/schemaValidatorMiddleware.js";
import * as authSchemas from "../schemas/authSchemas.js";
import * as authController from "../controllers/authController.js";

const authRouter = Router();
authRouter.post(
       "/signin",
        validateSchema(authSchemas.signinSchema),
        authController.signin
)

export default authRouter;