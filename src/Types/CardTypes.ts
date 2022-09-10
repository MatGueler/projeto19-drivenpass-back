import { Cards } from "@prisma/client";

export type ICrads = Cards;

export type ICreateCard = Omit<ICrads, "id">;

export type ICardInfo = Omit<ICrads, "id" | "userId">;
