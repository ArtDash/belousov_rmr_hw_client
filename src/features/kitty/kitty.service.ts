import axios from "axios";
import { Request } from "../../utils/types/request";

export class KittyAPI {
  static getKitty: Request = () => axios.get("/api/v1/kitty");
}
