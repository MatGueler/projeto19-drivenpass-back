import { Request, Response } from "express";
import * as service from "../Services/NoteService";
import { InoteInfo } from "../Types/NoteType";

export async function CreateNote(req: Request, res: Response) {
  const userId = res.locals.userId;
  const infos: InoteInfo = req.body;
  const newNote = await service.newNote(infos, Number(userId));
  res.sendStatus(201);
}

export async function getAllNotes(req: Request, res: Response) {
  const userId = res.locals.userId;
  const getAllNotes = await service.getAllNotes(userId);
  res.status(200).send(getAllNotes);
}

export async function fetchNote(req: Request, res: Response) {
  const { id } = req.params;
  const userId = res.locals.userId;
  const getNote = await service.getNoteById(Number(id), userId);
  res.status(200).send(getNote);
}
