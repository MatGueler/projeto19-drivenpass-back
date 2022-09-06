import { encryptPassword } from "./UserService";
import { IcredencialInfo } from "../Types/CredentialTypes";

export async function newCredential(infos: IcredencialInfo) {
  const cryptPassword = encryptPassword(infos.password);
  return cryptPassword;
}

export async function loginUser(email: string, password: string) {
  console.log(email);
}

export interface IuserInfo {
  name: string;
  email: string;
  password: string;
}
