import { Router } from "express";
import {
  CreateCredential,
  getAllCredentials,
  GetCredentialById,
} from "../Controllers/CredentialController";
import { validateSchema } from "../Middlewares/validateSchemaMiddleware";
import { validatingToken } from "../Middlewares/ValidateToken";
import CredentialSchema from "../Schemas/CredentialSchema";

const CredentialRouter = Router();

CredentialRouter.post(
  "/new/credential",
  validatingToken,
  validateSchema(CredentialSchema),
  CreateCredential
);

CredentialRouter.get("/credential/:id", validatingToken, GetCredentialById);
CredentialRouter.get("/credentials", validatingToken, getAllCredentials);

export default CredentialRouter;
