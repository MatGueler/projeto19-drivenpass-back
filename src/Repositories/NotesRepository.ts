import prisma from "../Database/prisma";
import { ICreateNote } from "../Types/NoteType";

export async function noteByTitle(title: string, userId: number) {
  const notes = await prisma.notes.findFirst({
    where: { userId: userId, name: title },
  });
  return notes;
}

export async function getNoteById(id: number) {
  const notes = await prisma.notes.findFirst({
    where: { id },
  });
  return notes;
}

export async function getAllNotes(userId: number) {
  const notes = await prisma.notes.findMany({
    where: { userId },
  });
  return notes;
}

export async function createNote(note: ICreateNote) {
  await prisma.notes.create({ data: note });
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

export async function createUrl(urlName: string) {
  await prisma.urls.create({ data: { url: urlName } });
}

export async function deleteCredentialById(id: number) {
  await prisma.credentials.delete({ where: { id } });
}
