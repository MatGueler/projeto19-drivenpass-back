import { Router } from "express";
import { CreateWifi, getWifiById } from "../Controllers/WifiController";
import { validateSchema } from "../Middlewares/validateSchemaMiddleware";
import { validatingToken } from "../Middlewares/ValidateToken";
import WifiSchema from "../Schemas/WifiSchema";

const WifiRouter = Router();

WifiRouter.post(
  "/new/wifi",
  validateSchema(WifiSchema),
  validatingToken,
  CreateWifi
);
// WifiRouter.get("/wifi", validatingToken, getAllCards);
WifiRouter.get("/wifi/:id", validatingToken, getWifiById);
// WifiRouter.delete("/wifi/delete/:id", validatingToken, deleteCardById);

export default WifiRouter;
