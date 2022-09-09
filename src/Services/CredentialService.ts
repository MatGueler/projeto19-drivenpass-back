import {
  ICreateCredencial,
  ICredential,
  IReciveCredencial,
} from "../Types/CredentialTypes";
import Cryptr from "cryptr";
import dotenv from "dotenv";
// import { verifyUserExist } from "../Repositories/UserRepository";
import * as repository from "../Repositories/CredentialRepository";

dotenv.config();

export async function newCredential(infos: ICreateCredencial, userId: number) {
  await verifyCredentialExist(infos, userId);
  const urlId = await verifyUrl(infos.url);
  const encryptedPassword = encryptString(infos.password);
  const credential = {
    userId,
    urlId: Number(urlId),
    name: infos.title,
    password: encryptedPassword,
  };
  await repository.createCredential(credential);
}

export async function getCredentialById(id: number, userId: number) {
  let credentialById = await repository.getCredentialById(id);
  verifyCredentialNoExist(credentialById);
  verifyUserCreedential(credentialById, userId);
  const decryptedPassword = decryptedString(credentialById?.password);
  const credential = { ...credentialById, password: decryptedPassword };
  return credential;
}

export async function getAllCredentials(userId: number) {
  const credentialById = await repository.getAllCredential(userId);
  return credentialById;
}

// General functions
function decryptedString(password: string | undefined) {
  const SECRET_KEY_CRYPTR = String(process.env.SECRET_KEY_CRYPTR);
  const cryptr = new Cryptr(SECRET_KEY_CRYPTR);
  if (password) {
    const decryptedString = cryptr.decrypt(password);
    return decryptedString;
  }
}

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

async function verifyUserCreedential(
  credential: ICredential | null,
  userId: number
) {
  if (credential?.userId !== userId) {
    throw { code: "Unauthorized", message: "This message doesn't your" };
  }
}

async function verifyUrl(url: string) {
  let urlId = await repository.getUrl(url);

  if (urlId) {
    return urlId.id;
  } else {
    await repository.createUrl(url);
  }
  urlId = await repository.getUrl(url);
  if (urlId) {
    return urlId.id;
  }
}

function verifyCredentialNoExist(infos: IReciveCredencial | null) {
  if (!infos) {
    throw { code: "Unauthorized", message: "Credential doesn't exist" };
  }
}
