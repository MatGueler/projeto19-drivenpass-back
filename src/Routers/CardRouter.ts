import { Router } from "express";
import {
  CreateCard,
  deleteCardById,
  getAllCards,
  getCardById,
} from "../Controllers/CardController";
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
CardRouter.get("/card/:id", validatingToken, getCardById);
CardRouter.delete("/card/delete/:id", validatingToken, deleteCardById);

export default CardRouter;
