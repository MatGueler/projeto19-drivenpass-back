import prisma from "../Database/prisma";
import { ICreateCredencial } from "../Types/CredentialTypes";

export async function verifyNameCredential(
  infos: ICreateCredencial,
  userId: number
) {
  const credential = await prisma.credentials.findFirst({
    where: { userId: userId, name: infos.name },
  });
  return credential;
}

export async function getCredentialById(id: number) {
  const credential = await prisma.credentials.findFirst({
    where: { id },
  });
  return credential;
}

export async function getAllCredential() {
  const credential = await prisma.credentials.findMany();
  return credential;
}
