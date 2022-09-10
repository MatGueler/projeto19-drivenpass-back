import { ICardInfo, ICrads } from "../Types/CardTypes";
import * as repository from "../Repositories/WifiRepository";
import Cryptr from "cryptr";
import dotenv from "dotenv";
import { IWifi, IWifiInfo } from "../Types/WifiTypes";

dotenv.config();

export async function newWifi(infos: IWifiInfo, userId: number) {
  const encryptedPassword = encryptString(infos.password);
  const wifi = {
    ...infos,
    userId,
    password: encryptedPassword,
  };
  await repository.createWifi(wifi);
}

export async function getWifiById(id: number, userId: number) {
  let wifiById = await repository.getWifiById(id);
  await verifyWifiNoExist(wifiById);
  await verifyUserWifi(wifiById, userId);
  return wifiById;
}

// export async function getAllCards(userId: number) {
//   const credentialById = await repository.getAllCards(userId);
//   return credentialById;
// }

// export async function deleteCardById(id: number, userId: number) {
//   const noteById = await repository.getCardById(id);
//   await verifyCardNoExist(noteById);
//   await verifyUserCard(noteById, userId);
//   await repository.deleteCardById(id);
// }

function encryptString(password: string) {
  const SECRET_KEY_CRYPTR = String(process.env.SECRET_KEY_CRYPTR);
  const cryptr = new Cryptr(SECRET_KEY_CRYPTR);
  const encryptedString = cryptr.encrypt(password);
  return encryptedString;
}

async function verifyWifiNoExist(card: IWifi | null) {
  if (!card) {
    throw { code: "Unauthorized", message: "This card doesn't exist" };
  }
}

async function verifyUserWifi(wifi: IWifi | null, userId: number) {
  if (wifi?.userId !== userId) {
    throw { code: "Unauthorized", message: "This wifi doesn't your" };
  }
}
