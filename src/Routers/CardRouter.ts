import { Router } from "express";
import { CreateCard, getAllCards } from "../Controllers/CardController";
import { validateSchema } from "../Middlewares/validateSchemaMiddleware";
import { validatingToken } from "../Middlewares/ValidateToken";
import CardSchema from "../Schemas/CardSchema";

const CardRouter = Router();

CardRouter.post(
  "/new/card",
  validateSchema(CardSchema),
  validatingToken,
  CreateCard
);
CardRouter.get("/cards", validatingToken, getAllCards);

export default CardRouter;
