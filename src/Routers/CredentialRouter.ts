import { Router } from "express";
import {
  CreateCredential,
  GetCredentialById,
} from "../Controllers/CredentialController";
import { validateSchema } from "../Middlewares/validateSchemaMiddleware";
import CredentialSchema from "../Schemas/CredentialSchema";

const CredentialRouter = Router();

CredentialRouter.post(
  "/new/credential",
  validateSchema(CredentialSchema),
  CreateCredential
);

CredentialRouter.get("/credential/:id", GetCredentialById);

export default CredentialRouter;
