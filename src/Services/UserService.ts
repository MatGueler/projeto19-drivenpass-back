import bcrypt from "bcrypt";
import * as repository from "../Repositories/UserRepository";
import { ILoginUser, IRegisterUser } from "../Types/UserTypes";

export async function registerUser(infos: IRegisterUser) {
  const cryptPassword = await encryptPassword(infos.password);
  const infosRegister = {
    name: infos.name,
    email: infos.email,
    password: String(cryptPassword),
  };
  const Register = await repository.InsertUser(infosRegister);
  return cryptPassword;
}

export async function loginUser(infos: ILoginUser) {
  console.log(infos.email);
}

export async function encryptPassword(password: string) {
  const SALT = 10;
  const cryptPassword = bcrypt.hashSync(password, SALT);
  return cryptPassword;
}
