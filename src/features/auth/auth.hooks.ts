import { useState } from "react";
import { USER_IS_AUTH_LS } from "./auth.constants";
import {
  AuthCredentials,
  useLogInReturnType,
  useLogOutReturnType
} from "./auth.entity";
import { AuthAPI } from "./auth.service";
import { useAuth } from "./auth.store";

export const useLogIn = (): useLogInReturnType => {
  const [authError, setAuthError] = useState(false);
  const { setIsAuth } = useAuth();

  const logIn = async (inputData: AuthCredentials): Promise<void> => {
    try {
      await AuthAPI.authenticate(inputData);
      setIsAuth((state: boolean) => !state);
      localStorage.setItem(USER_IS_AUTH_LS, "true");
    } catch {
      setAuthError(true);
    }
  };

  return { logIn, authError };
};

export const useLogOut = (): useLogOutReturnType => {
  const { setIsAuth } = useAuth();

  const logOut = (): void => {
    void AuthAPI.logOut(null)
      .then(() => setIsAuth((state) => !state))
      .then(() => localStorage.removeItem(USER_IS_AUTH_LS));
  };

  return { logOut };
};
