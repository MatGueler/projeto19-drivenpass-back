import { Router } from "express";
import { CreateCard } from "../Controllers/CardController";
import { validateSchema } from "../Middlewares/validateSchemaMiddleware";

const CardRouter = Router();

CardRouter.post("/new/card", CreateCard);

export default CardRouter;
