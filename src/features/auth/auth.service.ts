import axios from "axios";
import { Request } from "../../utils/types/request";

type AuthCredentials = {
  phone: string;
  email: string;
  password: string;
};

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
