import { Router } from "express";
import { CreateCredential } from "../Controllers/CredentialController";
import { validateSchema } from "../Middlewares/validateSchemaMiddleware";
import CredentialSchema from "../Schemas/CredentialSchema";

const CredentialRouter = Router();

CredentialRouter.post(
  "/new/credential",
  validateSchema(CredentialSchema),
  CreateCredential
);

export default CredentialRouter;
