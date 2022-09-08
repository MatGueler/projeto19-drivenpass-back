import prisma from "../Database/prisma";
import { IRegisterUser } from "../Types/UserTypes";

export async function InsertUser(infos: IRegisterUser) {
  await prisma.users.create({ data: infos });
}

export async function verifyUserEmail(email: string) {
  const user = await prisma.users.findFirst({ where: { email } });
  return user;
}

export async function verifyUserExist(email: string, id: number) {
  const user = await prisma.users.findFirst({ where: { id, email } });
  return user;
}
