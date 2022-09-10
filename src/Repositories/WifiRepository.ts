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

export async function getAllWifi(userId: number) {
  const wifi = await prisma.wifi.findMany({
    where: { userId },
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

export async function deleteCardById(id: number) {
  await prisma.cards.delete({ where: { id } });
}
