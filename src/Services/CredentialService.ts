import { ICreateCredencial, IReciveCredencial } from "../Types/CredentialTypes";
import Cryptr from "cryptr";
import dotenv from "dotenv";
// import { verifyUserExist } from "../Repositories/UserRepository";
import * as repository from "../Repositories/CredentialRepository";

dotenv.config();

export async function newCredential(infos: ICreateCredencial, userId: number) {
  verifyCredentialExist(infos, userId);
  // const urlId = repository.getUrl(infos.url)
  const encryptedPassword = encryptString(infos.password);
  const credential = {
    userId,
    name: infos.name,
    password: encryptedPassword,
  };
}

export async function getCredentialById(id: number) {
  const credentialById = await repository.getCredentialById(id);
  verifyCredentialNoExist(credentialById);
  return credentialById;
}

export async function getAllCredentials() {
  const credentialById = await repository.getAllCredential();
  // verifyCredentialNoExist(credentialById);
  return credentialById;
}

// General functions
function encryptString(infos: string) {
  const SECRET_KEY_CRYPTR = String(process.env.SECRET_KEY_CRYPTR);
  const cryptr = new Cryptr(SECRET_KEY_CRYPTR);
  const encryptedString = cryptr.encrypt("bacon");
  // const decryptedString = cryptr.decrypt(encryptedString);
  return encryptedString;
}

async function verifyCredentialExist(infos: ICreateCredencial, userId: number) {
  const credentialByName = await repository.verifyNameCredential(infos, userId);
  if (credentialByName) {
    throw { code: "Unauthorized", message: "Credential already exist" };
  }
}

function verifyCredentialNoExist(infos: IReciveCredencial | null) {
  if (!infos) {
    throw { code: "Unauthorized", message: "Credential doesn't exist" };
  }
}
