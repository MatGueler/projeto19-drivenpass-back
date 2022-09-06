import { Router } from "express";
import UserRouter from "./userRouter";

const routes = Router();

routes.use(UserRouter);

export default routes;
