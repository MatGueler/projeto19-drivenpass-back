import joi from "joi";

const WifiSchema = joi.object({
  Networkname: joi.string().required(),
  password: joi.string().required(),
  label: joi.string().required(),
});

export default WifiSchema;
