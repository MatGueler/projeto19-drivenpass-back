import prisma from "../Database/prisma";
import { ICreateCredencial, IReciveCredencial } from "../Types/CredentialTypes";

export async function verifyNameCredential(
  infos: ICreateCredencial,
  userId: number
) {
  const credential = await prisma.credentials.findFirst({
    where: { userId: userId, name: infos.title },
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

export async function getUrl(url: string) {
  const getUrl = await prisma.urls.findFirst({ where: { url } });
  return getUrl;
}

export async function createCredential(credential: IReciveCredencial) {
  await prisma.credentials.create({ data: credential });
}

export async function createUrl(urlName: string) {
  await prisma.urls.create({ data: { url: urlName } });
}
