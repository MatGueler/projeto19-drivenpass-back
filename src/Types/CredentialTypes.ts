import { Credentials } from "@prisma/client";

export type IReciveCredencial = Credentials;

// export type ICreateCredencial = Omit<IReciveCredencial, "id" | "urlId">;

export interface ICreateCredencial {
  userId: number;
  url: string;
  name: string;
  password: string;
}
