import prisma from "../Database/prisma";
import { ICreateCard } from "../Types/CardTypes";

export async function cardByName(name: string, userId: number) {
  const cards = await prisma.cards.findFirst({
    where: { userId, name },
  });
  return cards;
}

export async function getCardById(id: number) {
  const card = await prisma.cards.findFirst({
    where: { id },
  });
  return card;
}

export async function getAllCards(userId: number) {
  const cards = await prisma.cards.findMany({
    where: { userId },
  });
  return cards;
}

export async function createCard(card: ICreateCard) {
  await prisma.cards.create({ data: card });
}

export async function deleteCardById(id: number) {
  await prisma.cards.delete({ where: { id } });
}
