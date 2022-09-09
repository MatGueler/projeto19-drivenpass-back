import { Request, Response } from "express";
import * as service from "../Services/CardService";
import { ICardInfo, ICrads } from "../Types/CardTypes";

export async function CreateCard(req: Request, res: Response) {
  const userId = res.locals.userId;
  const infos: ICrads = req.body;
  await service.newCard(infos, userId);
  res.sendStatus(201);
}

export async function getCardById(req: Request, res: Response) {
  const { id } = req.params;
  const userId = res.locals.userId;
  const card = await service.getCardById(Number(id), Number(userId));
  res.status(200).send(card);
}

export async function getAllCards(req: Request, res: Response) {
  const userId = res.locals.userId;
  const cards = await service.getAllCards(userId);
  res.status(200).send(cards);
}

export async function deleteCardById(req: Request, res: Response) {
  const { id } = req.params;
  const userId = res.locals.userId;
  await service.deleteCardById(Number(id), userId);
  res.sendStatus(200);
}
