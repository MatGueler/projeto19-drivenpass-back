import { Credentials } from "@prisma/client";

export type IReciveCredencial = Omit<Credentials, "id">;

export type ICredential = Credentials;

export interface ICreateCredencial {
  userId: number;
  url: string;
  title: string;
  password: string;
}
