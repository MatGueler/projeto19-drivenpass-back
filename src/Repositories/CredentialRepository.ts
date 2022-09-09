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
  const credential = await prisma.credentials.findUnique({
    where: { id },
    // include: {
    //   url: true,
    //   user: true,
    // },
    select: {
      id: true,
      name: true,
      password: true,
      urlId: true,
      userId: true,
      url: {
        select: {
          url: true,
        },
      },
      user: {
        select: {
          name: true,
          email: true,
        },
      },
    },
  });
  return credential;
}

export async function getAllCredential(userId: number) {
  const credential = await prisma.credentials.findMany({
    where: { userId },
  });
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

export async function deleteCredentialById(id: number) {
  await prisma.credentials.delete({ where: { id } });
}
