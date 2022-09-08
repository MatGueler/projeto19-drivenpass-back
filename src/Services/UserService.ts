import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import * as repository from "../Repositories/UserRepository";
import { ILoginUser, IRegisterUser } from "../Types/UserTypes";

export async function registerUser(infos: IRegisterUser) {
  const cryptPassword = await encryptPassword(infos.password);
  const verify = await verifyUserEmail(infos.email);
  const infosRegister = {
    name: infos.name,
    email: infos.email,
    password: String(cryptPassword),
  };
  const Register = await repository.InsertUser(infosRegister);
  return cryptPassword;
}

export async function loginUser(infos: ILoginUser, userId: number) {
  const user = await verifyUserNoExist(infos.email, userId);
  const JWT_SECRET = String(process.env.JWT_SECRET);
  const token = jwt.sign(
    {
      id: Number(user.id),
    },
    JWT_SECRET,
    { expiresIn: 60 * 60 * 24 }
  );
  return token;
}

export async function encryptPassword(password: string) {
  const SALT = 10;
  const cryptPassword = bcrypt.hashSync(password, SALT);
  return cryptPassword;
}

async function verifyUserEmail(email: string) {
  const verifyUserEmail = await repository.verifyUserEmail(email);
  if (verifyUserEmail) {
    throw { code: "Unauthorized", message: "Account alreaady exist" };
  }
  return verifyUserEmail;
}

async function verifyUserNoExist(email: string, userId: number) {
  const verifyUserExist = await repository.verifyUserExist(email, userId);
  if (!verifyUserExist) {
    throw { code: "Unauthorized", message: "Account doesn't exist" };
  }
  return verifyUserExist;
}
