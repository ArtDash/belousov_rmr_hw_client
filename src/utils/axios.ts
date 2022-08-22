import Axios from "axios";
import { USER_IS_AUTH_LS } from "../features/auth";

export const axios = Axios.create();

axios.interceptors.response.use(
  (responce) => responce.data,
  (e) => {
    console.log(`Error: ${e}`);
    localStorage.removeItem(USER_IS_AUTH_LS);
  }
);
