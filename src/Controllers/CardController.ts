import { Request, Response } from "express";
import * as service from "../Services/CardService";
import { ICardInfo } from "../Types/CardTypes";

export async function CreateCard(req: Request, res: Response) {
  const infos: ICardInfo = req.body;
  const newNote = await service.newCard(infos);
  res.sendStatus(201);
}
