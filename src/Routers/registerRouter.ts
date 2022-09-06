import { Router } from "express";
import { loginUser, registerUser } from "../Controllers/userController";

const RegisterRouter = Router();

RegisterRouter.post("/signup", registerUser);
RegisterRouter.post("/login", loginUser);

export default RegisterRouter;
