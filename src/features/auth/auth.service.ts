import { axios } from "../../utils/axios";
import { Request } from "../../utils/types/request";
import { AuthCredentials } from "./auth.entity";

export class AuthAPI {
  static authenticate: Request<AuthCredentials> = ({
    phone,
    email,
    password,
  }) => {
    return axios.post("/api/v1/login", {
      email: email,
      phone: phone,
      password: password,
    });
  };

  static logOut: Request = () => axios.post("/api/v1/logout");
}
