import { Request, Response } from "express";
import * as service from "../Services/UserService";
import { ILoginUser, IRegisterUser } from "../Types/UserTypes";

export async function registerUser(req: Request, res: Response) {
  const infos: IRegisterUser = req.body;
  const registerUser = await service.registerUser(infos);
  res.sendStatus(201);
}

export async function loginUser(req: Request, res: Response) {
  const infos: ILoginUser = req.body;
  const userId = res.locals.userId;
  const token = await service.loginUser(infos, userId);
  res.status(200).send(token);
}
