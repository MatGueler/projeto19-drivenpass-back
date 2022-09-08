import prisma from "../Database/prisma";
import { ICreateCredencial } from "../Types/CredentialTypes";

export async function verifyNameCredential(infos: ICreateCredencial) {
  const credential = await prisma.credentials.findFirst({
    where: { userId: 1, name: infos.name },
  });
  return credential;
}

export async function getCredentialById(id: number) {
  const credential = await prisma.credentials.findFirst({
    where: { id },
  });
  return credential;
}
