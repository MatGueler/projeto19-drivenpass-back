import { Notes } from "@prisma/client";

export type INote = Notes;

export type ICreateNote = Omit<Notes, "id">;

export interface InoteInfo {
  title: string;
  annotation: string;
}
