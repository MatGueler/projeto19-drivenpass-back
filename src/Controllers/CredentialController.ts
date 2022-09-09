import { Request, Response } from "express";
import * as service from "../Services/CredentialService";
import { ICreateCredencial } from "../Types/CredentialTypes";

export async function CreateCredential(req: Request, res: Response) {
  const infos: ICreateCredencial = req.body;
  const userId = res.locals.userId;
  const newCredential = await service.newCredential(infos, userId);
  res.sendStatus(201);
}

export async function GetCredentialById(req: Request, res: Response) {
  const { id } = req.params;
  const userId = res.locals.userId;
  const credential = await service.getCredentialById(
    Number(id),
    Number(userId)
  );
  res.status(200).send(credential);
}

export async function getAllCredentials(req: Request, res: Response) {
  const userId = res.locals.userId;
  const credentials = await service.getAllCredentials(userId);
  res.status(200).send(credentials);
}
