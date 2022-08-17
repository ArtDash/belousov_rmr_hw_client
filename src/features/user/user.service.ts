import axios from "axios";
import { Request } from "../../utils/types/request";

export class UserAPI {
  static getUserProfile: Request = () => axios.get("/api/v1/profile");
}
