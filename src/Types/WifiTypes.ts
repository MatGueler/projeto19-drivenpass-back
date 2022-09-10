import { Wifi } from "@prisma/client";

export type IWifi = Wifi;

export type ICreateWifi = Omit<IWifi, "id">;

export type IWifiInfo = Omit<IWifi, "id" | "userId">;
