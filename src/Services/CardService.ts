import { ICardInfo } from "../Types/CardTypes";

export async function newCard(infos: ICardInfo) {
  console.log(infos);
  return infos;
}
