import { axios } from "../../infrastructure/request/axios";
import { Request } from "../../utils/types/request";

export class KittyAPI {
  static getKitty: Request = async () => await axios.get("/api/v1/kitty");
}
