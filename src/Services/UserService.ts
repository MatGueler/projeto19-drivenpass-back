import bcrypt from "bcrypt";

export async function registerUser(
  name: string,
  email: string,
  password: string
) {
  const cryptPassword = encryptPassword(password);
  return cryptPassword;
}

export async function loginUser(email: string, password: string) {
  console.log(email);
}

export async function encryptPassword(password: string) {
  const SALT = 10;
  const cryptPassword = bcrypt.hashSync(password, SALT);
  return cryptPassword;
}
