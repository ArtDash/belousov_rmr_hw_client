import React, { useMemo } from "react";
import { useAuth, USER_IS_AUTH_LS } from "../../features/auth";
import { axios } from "./axios";

type Props = {
  children: React.ReactNode;
};

export const RequestService: React.FC<Props> = ({ children }) => {
  const { setIsAuth } = useAuth();

  useMemo(() => {
    axios.interceptors.response.use(
      (responce) => responce.data,
      () => {
        setIsAuth(false);
        localStorage.removeItem(USER_IS_AUTH_LS);
      }
    );
  }, [setIsAuth]);

  return <>{children}</>;
};
