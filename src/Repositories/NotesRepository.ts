import prisma from "../Database/prisma";
import { ICreateNote } from "../Types/NoteType";

export async function noteByTitle(title: string, userId: number) {
  const notes = await prisma.notes.findFirst({
    where: { userId: userId, name: title },
  });
  return notes;
}

export async function getNoteById(id: number) {
  const notes = await prisma.notes.findFirst({
    where: { id },
  });
  return notes;
}

export async function getAllNotes(userId: number) {
  const notes = await prisma.notes.findMany({
    where: { userId },
  });
  return notes;
}

export async function createNote(note: ICreateNote) {
  await prisma.notes.create({ data: note });
}

export async function deleteNoteById(id: number) {
  await prisma.notes.delete({ where: { id } });
}
