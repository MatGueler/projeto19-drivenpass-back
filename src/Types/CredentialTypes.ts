import { Credentials } from "@prisma/client";
// import { Urls } from "@prisma/client";

export type IReciveCredencial = Omit<Credentials, "id">;

// export type ICreateCredencial = Omit<IReciveCredencial, "id" | "urlId">;

export interface ICreateCredencial {
  userId: number;
  url: string;
  title: string;
  password: string;
}
