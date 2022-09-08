import { Users } from "@prisma/client";

export type ILoginUser = Omit<Users, "id" | "name">;

export type IRegisterUser = Omit<Users, "id">;

export type IUser = Users;
