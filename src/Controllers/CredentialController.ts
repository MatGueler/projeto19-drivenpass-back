import { Request, Response } from "express";
import * as service from "../Services/CredentialService";
import { IuserInfo } from "../Types/UserTypes";
import { IcredencialInfo } from "../Types/CredentialTypes";

export async function CreateCredential(req: Request, res: Response) {
  const infos: IcredencialInfo = req.body;
  const newCredential = await service.newCredential(infos);
  res.sendStatus(201);
}
