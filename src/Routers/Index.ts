import { Router } from "express";
import CredentialRouter from "./CredentialRouter";
import UserRouter from "./UserRouter";

const routes = Router();

routes.use(UserRouter);
routes.use(CredentialRouter);

export default routes;
