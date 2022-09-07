import { InoteInfo } from "../Types/NoteType";

export async function newNote(infos: InoteInfo) {
  const title = infos.title;
  console.log(title);
  return title;
}

export async function getNote(id: number) {
  console.log(id);
  return id;
}
