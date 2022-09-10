import joi from "joi";

const CardSchema = joi.object({
  number: joi.string().length(16).required(),
  cardHolderName: joi.string().required(),
  name: joi.string().required(),
  password: joi.string().required(),
  cvc: joi.string().length(3).required(),
  expirationDate: joi.string().required(),
  isVirtual: joi.boolean().required(),
  type: joi.string().valid("credito").valid("debito").valid("ambos").required(),
});

export default CardSchema;
