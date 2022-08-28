import React, { useEffect } from "react";
import { useAuth, USER_IS_AUTH_LS } from "../../features/auth";
import { RequestErrors } from "../../features/error";
import { axios } from "./axios";

type Props = {
  children: React.ReactNode;
};

export const RequestService: React.FC<Props> = ({ children }) => {
  const { setIsAuth } = useAuth();

  useEffect(() => {
    const interceptor = axios.interceptors.response.use(
      (response) => {
        return response.data;
      },
      async (error) => {
        const statusCode = error.request.status;
        if (Object.values(RequestErrors).includes(statusCode)) {
          setIsAuth(false);
          localStorage.removeItem(USER_IS_AUTH_LS);
        }
      }
    );
    return () => axios.interceptors.response.eject(interceptor);
  }, [setIsAuth]);

  return <>{children}</>;
};
