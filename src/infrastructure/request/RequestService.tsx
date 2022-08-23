import React, { useMemo } from "react";
import { useAuth, USER_IS_AUTH_LS } from "../../features/auth";
import { RequestErrors } from "../../features/error";
import { axios } from "./axios";

type Props = {
  children: React.ReactNode;
};

export const RequestService: React.FC<Props> = ({ children }) => {
  const { setIsAuth } = useAuth();

  useMemo(() => {
    axios.interceptors.response.use(
      (responce) => responce.data,
      (error) => {
        const statusCode = error.request.status;

        if (Object.values(RequestErrors).includes(statusCode)) {
          setIsAuth(false);
          localStorage.removeItem(USER_IS_AUTH_LS);
        }
      }
    );
  }, [setIsAuth]);

  return <>{children}</>;
};
