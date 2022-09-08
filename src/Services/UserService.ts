import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import * as repository from "../Repositories/UserRepository";
import { ILoginUser, IRegisterUser } from "../Types/UserTypes";

export async function registerUser(infos: IRegisterUser) {
  const cryptPassword = await encryptPassword(infos.password);
  const verify = await verifyUserExist(infos.email);
  const infosRegister = {
    name: infos.name,
    email: infos.email,
    password: String(cryptPassword),
  };
  const Register = await repository.InsertUser(infosRegister);
  return cryptPassword;
}

export async function loginUser(infos: ILoginUser) {
  const user = await verifyUserNoExist(infos.email);
  const token = jwt.sign(
    {
      data: user.id,
    },
    "secret",
    { expiresIn: 60 * 60 * 24 }
  );
  var decoded = jwt.decode(token);
  console.log(token);
}

export async function encryptPassword(password: string) {
  const SALT = 10;
  const cryptPassword = bcrypt.hashSync(password, SALT);
  return cryptPassword;
}

async function verifyUserExist(email: string) {
  const verifyUserExist = await repository.verifyUserExist(email);
  if (verifyUserExist) {
    throw { code: "Unauthorized", message: "Account alreaady exist" };
  }
  return verifyUserExist;
}

async function verifyUserNoExist(email: string) {
  const verifyUserExist = await repository.verifyUserExist(email);
  if (!verifyUserExist) {
    throw { code: "Unauthorized", message: "Account alreaady exist" };
  }
  return verifyUserExist;
}
