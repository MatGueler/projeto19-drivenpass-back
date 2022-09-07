import { encryptPassword } from "./UserService";
import { IcredencialInfo } from "../Types/CredentialTypes";

export async function newCredential(infos: IcredencialInfo) {
  const cryptPassword = encryptPassword(infos.password);
  return cryptPassword;
}
