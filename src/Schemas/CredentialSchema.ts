import joi from "joi";

const CredentialSchema = joi.object({
  url: joi.string().uri().required(),
  userName: joi.string().required(),
  title: joi.string().required(),
  password: joi.string().required(),
});

export default CredentialSchema;
