import { Credentials } from "@prisma/client";

export type IReciveCredencial = Credentials;

export type ICreateCredencial = Omit<IReciveCredencial, "id">;
