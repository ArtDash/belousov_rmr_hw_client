import axios from "axios";

export class API {
  static getKitty = () => axios.get("/api/v1/kitty");

  static getUserProfile = () => axios.get("/api/v1/profile");

  static authenticate = ({ phone, email, password }: any) => {
    return axios.post("/api/v1/login", {
      email: email,
      phone: phone,
      password: password,
    });
  };

  static logOut = () => axios.post("/api/v1/logout");
}
