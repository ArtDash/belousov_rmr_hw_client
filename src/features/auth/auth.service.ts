import { axios } from "../../infrastructure/request/axios";
import { Request } from "../../utils/types/request";
import { AuthCredentials } from "./auth.entity";

export class AuthAPI {
  static authenticate: Request<AuthCredentials> = async ({
    phone,
    email,
    password
  }) => {
    return await axios.post("/api/v1/login", {
      email,
      phone,
      password
    });
  };

  static logOut: Request = async () => await axios.post("/api/v1/logout");
}
