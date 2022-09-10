import { Request, Response } from "express";
import * as service from "../Services/WifiService";
import { IWifi, IWifiInfo } from "../Types/WifiTypes";

export async function CreateWifi(req: Request, res: Response) {
  const userId = res.locals.userId;
  const infos: IWifiInfo = req.body;
  await service.newWifi(infos, userId);
  res.sendStatus(201);
}

export async function getWifiById(req: Request, res: Response) {
  const { id } = req.params;
  const userId = res.locals.userId;
  const card = await service.getWifiById(Number(id), Number(userId));
  res.status(200).send(card);
}

// export async function getAllWifi(req: Request, res: Response) {
//   const userId = res.locals.userId;
//   const cards = await service.getAllCards(userId);
//   res.status(200).send(cards);
// }

// export async function deleteWifiById(req: Request, res: Response) {
//   const { id } = req.params;
//   const userId = res.locals.userId;
//   await service.deleteCardById(Number(id), userId);
//   res.sendStatus(200);
// }
