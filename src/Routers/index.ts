import { Router } from "express";
import RegisterRouter from "./userRouter";

const routes = Router();

routes.use(RegisterRouter);

export default routes;
