import { INote, InoteInfo } from "../Types/NoteType";
import * as repository from "../Repositories/NotesRepository";

export async function newNote(infos: InoteInfo, userId: number) {
  await verifyTitleUser(infos.title, userId);
  const note = {
    name: infos.title,
    annotation: infos.annotation,
    userId,
  };
  await repository.createNote(note);
}

export async function getAllNotes(userId: number) {
  const allNotes = await repository.getAllNotes(userId);
  return allNotes;
}

export async function getNoteById(id: number, userId: number) {
  const noteById = await repository.getNoteById(id);
  await verifyNoteExist(noteById);
  await verifyUserNote(noteById, userId);
  return noteById;
}

export async function deleteNoteById(id: number, userId: number) {
  const noteById = await repository.getNoteById(id);
  await verifyNoteExist(noteById);
  await verifyUserNote(noteById, userId);
  await repository.deleteNoteById(id);
}

async function verifyTitleUser(title: string, userId: number) {
  const notes = await repository.noteByTitle(title, userId);
  if (notes) {
    throw { code: "Unauthorized", message: "This title is unavailable" };
  }
}

async function verifyNoteExist(note: INote | null) {
  if (!note) {
    throw { code: "Unauthorized", message: "This note doesn't exist" };
  }
}

async function verifyUserNote(note: INote | null, userId: number) {
  if (note?.userId !== userId) {
    throw { code: "Unauthorized", message: "This note doesn't your" };
  }
}
