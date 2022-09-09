import { ICardInfo, ICrads } from "../Types/CardTypes";
import * as repository from "../Repositories/CardRepository";
import Cryptr from "cryptr";
import dotenv from "dotenv";

dotenv.config();

export async function newCard(infos: ICardInfo, userId: number) {
  await verifyNameUser(infos.name, userId);
  const encryptedPassword = encryptString(infos.password);
  const encryptedCVC = encryptString(infos.cvc);
  const card = {
    ...infos,
    userId,
    password: encryptedPassword,
    cvc: encryptedCVC,
  };
  await repository.createCard(card);
  return infos;
}

export async function getCardById(id: number, userId: number) {
  let cardById = await repository.getCardById(id);
  await verifyCardNoExist(cardById);
  await verifyUserCard(cardById, userId);
  return cardById;
}

export async function getAllCards(userId: number) {
  const credentialById = await repository.getAllCards(userId);
  return credentialById;
}

export async function deleteCardById(id: number, userId: number) {
  const noteById = await repository.getCardById(id);
  await verifyCardNoExist(noteById);
  await verifyUserCard(noteById, userId);
  await repository.deleteCardById(id);
}

async function verifyNameUser(name: string, userId: number) {
  const cards = await repository.cardByName(name, userId);
  if (cards) {
    throw { code: "Unauthorized", message: "This name is unavailable" };
  }
}

function encryptString(password: string) {
  const SECRET_KEY_CRYPTR = String(process.env.SECRET_KEY_CRYPTR);
  const cryptr = new Cryptr(SECRET_KEY_CRYPTR);
  const encryptedString = cryptr.encrypt(password);
  return encryptedString;
}

async function verifyCardNoExist(card: ICrads | null) {
  if (!card) {
    throw { code: "Unauthorized", message: "This card doesn't exist" };
  }
}

async function verifyUserCard(note: ICrads | null, userId: number) {
  if (note?.userId !== userId) {
    throw { code: "Unauthorized", message: "This note doesn't your" };
  }
}
