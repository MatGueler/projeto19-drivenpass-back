import { Request, Response } from "express";
import * as service from "../Services/UserService";

export async function registerUser(req: Request, res: Response) {
  const infos: {
    name: string;
    email: string;
    password: string;
  } = req.body;
  const registerUser = await service.registerUser(
    infos.name,
    infos.email,
    infos.password
  );
  res.status(201).send(registerUser);
}

export async function loginUser(req: Request, res: Response) {
  const infos: {
    email: string;
    password: string;
  } = req.body;
  const registerUser = await service.loginUser(infos.email, infos.password);
  res.sendStatus(200);
}
