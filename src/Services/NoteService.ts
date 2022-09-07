import { InoteInfo } from "../Types/NoteType";

export async function newNote(infos: InoteInfo) {
  const title = infos.title;
  console.log(title);
  return title;
}
