import { ICardInfo } from "../Types/CardTypes";
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

// export async function getCredentialById(id: number, userId: number) {
//   let credentialById = await repository.getCredentialById(id);
//   verifyCredentialNoExist(credentialById);
//   await verifyUserCreedential(credentialById, userId);
//   const decryptedPassword = decryptedString(credentialById?.password);
//   const credential = { ...credentialById, password: decryptedPassword };
//   return credential;
// }

export async function getAllCards(userId: number) {
  const credentialById = await repository.getAllCards(userId);
  return credentialById;
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
