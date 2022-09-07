import { Router } from "express";
import CredentialRouter from "./CredentialRouter";
import NoteRouter from "./NoteRouter";
import UserRouter from "./UserRouter";

const routes = Router();

routes.use(UserRouter);
routes.use(CredentialRouter);
routes.use(NoteRouter);

export default routes;
