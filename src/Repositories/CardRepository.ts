import prisma from "../Database/prisma";
import { ICreateCard } from "../Types/CardTypes";
import { ICreateNote } from "../Types/NoteType";

export async function cardByName(name: string, userId: number) {
  const cards = await prisma.notes.findFirst({
    where: { userId, name },
  });
  return cards;
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

export async function createCard(card: ICreateCard) {
  await prisma.cards.create({ data: card });
}

export async function deleteNoteById(id: number) {
  await prisma.notes.delete({ where: { id } });
}
