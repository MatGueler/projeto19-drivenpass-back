import prisma from "../Database/prisma";
import { IRegisterUser } from "../Types/UserTypes";

export async function InsertUser(infos: IRegisterUser) {
  await prisma.users.create({ data: infos });
}
