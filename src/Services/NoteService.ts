import { InoteInfo } from "../Types/NoteType";
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

export async function getNote(id: number) {
  console.log(id);
  return id;
}

async function verifyTitleUser(title: string, userId: number) {
  const notes = await repository.noteByTitle(title, userId);
  if (notes) {
    throw { code: "Unauthorized", message: "This title is unavailable" };
  }
}
