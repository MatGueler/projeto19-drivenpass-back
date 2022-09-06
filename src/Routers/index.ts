import { Router } from "express";
import RegisterRouter from "./registerRouter";

const routes = Router();

routes.use(RegisterRouter);

export default routes;
