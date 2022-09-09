import { ICardInfo } from "../Types/CardTypes";
import * as repository from "../Repositories/CardRepository";

export async function newCard(infos: ICardInfo, userId: number) {
  await verifyNameUser(infos.name, userId);
  const card = {
    ...infos,
    userId,
  };
  console.log(infos);
  await repository.createCard(card);
  return infos;
}

async function verifyNameUser(name: string, userId: number) {
  const cards = await repository.cardByName(name, userId);
  if (cards) {
    throw { code: "Unauthorized", message: "This name is unavailable" };
  }
}

// async function verifyNoteExist(note: INote | null) {
//   if (!note) {
//     throw { code: "Unauthorized", message: "This note doesn't exist" };
//   }
// }

// async function verifyUserNote(note: INote | null, userId: number) {
//   if (note?.userId !== userId) {
//     throw { code: "Unauthorized", message: "This note doesn't your" };
//   }
// }
