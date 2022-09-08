import { Request, Response } from "express";
import * as service from "../Services/CredentialService";
import { ICreateCredencial } from "../Types/CredentialTypes";

export async function CreateCredential(req: Request, res: Response) {
  const infos: ICreateCredencial = req.body;
  const newCredential = await service.newCredential(infos);
  res.sendStatus(201);
}

export async function GetCredentialById(req: Request, res: Response) {
  const { id } = req.params;
  const credential = await service.getCredentialById(Number(id));
  console.log(credential);
  res.sendStatus(201);
}
