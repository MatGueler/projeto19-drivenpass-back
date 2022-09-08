import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { NextFunction, Request, Response } from "express";
dotenv.config();

export function validatingToken(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { authorization } = req.headers;
  const token = authorization?.replace("Bearer ", "");
  const JWT_SECRET = String(process.env.JWT_SECRET);
  if (!token) {
    throw { code: "Unauthorized", message: "Token not found" };
  }
  const data: any = jwt.verify(token, JWT_SECRET);
  res.locals.userId = data.id;
  next();
}
