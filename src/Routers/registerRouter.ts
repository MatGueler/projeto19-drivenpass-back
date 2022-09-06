import { Router } from "express";
import { loginUser, registerUser } from "../Controllers/userController";
import { validateSchema } from "../Middlewares/validateSchemaMiddleware";
import registerSchema from "../Schemas/registerSchema";

const RegisterRouter = Router();

RegisterRouter.post("/signup", validateSchema(registerSchema), registerUser);
RegisterRouter.post("/login", loginUser);

export default RegisterRouter;
