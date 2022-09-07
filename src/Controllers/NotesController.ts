import { Request, Response } from "express";
import * as service from "../Services/NoteService";
import { InoteInfo } from "../Types/NoteType";

export async function CreateNote(req: Request, res: Response) {
  const infos: InoteInfo = req.body;
  const newNote = await service.newNote(infos);
  res.sendStatus(201);
}

export async function fetchNote(req: Request, res: Response) {
  const { id } = req.params;
  console.log(id);
  const getNote = await service.getNote(Number(id));
  res.sendStatus(201);
}
