import prisma from "../Database/prisma";
import { ICreateWifi, IWifi } from "../Types/WifiTypes";

export async function createWifi(wifi: ICreateWifi) {
  await prisma.wifi.create({ data: wifi });
}

export async function getWifiById(id: number) {
  const wifi = await prisma.wifi.findFirst({
    where: { id },
    include: {
      user: {
        select: {
          name: true,
        },
      },
    },
  });
  return wifi;
}

export async function getAllCards(userId: number) {
  const cards = await prisma.cards.findMany({
    where: { userId },
  });
  return cards;
}

export async function deleteCardById(id: number) {
  await prisma.cards.delete({ where: { id } });
}
