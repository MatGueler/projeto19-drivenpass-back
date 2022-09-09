import { Request, Response } from "express";
import * as service from "../Services/CardService";
import { ICardInfo, ICrads } from "../Types/CardTypes";

export async function CreateCard(req: Request, res: Response) {
  const userId = res.locals.userId;
  const infos: ICrads = req.body;
  await service.newCard(infos, userId);
  res.sendStatus(201);
}
