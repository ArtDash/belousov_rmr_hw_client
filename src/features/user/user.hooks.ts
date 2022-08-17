import { useLayoutEffect, useState } from "react";
import { useAuth } from "../auth";
import { UserDTO } from "./user.entity";
import { UserAPI } from "./user.service";

type User = {
  username: string;
};

export const useUserProfile = () => {
  const { isAuth, setIsAuth } = useAuth();
  const [userData, setUserData] = useState({} as User);

  useLayoutEffect(() => {
    if (isAuth) {
      UserAPI.getUserProfile(null)
        .then((res) => res.data)
        .then(({ data: { name } }: UserDTO) =>
          setUserData((state) => ({ ...state, username: name }))
        )
        .catch(() => {
          setIsAuth(false);
          localStorage.removeItem("KittyIsAuth");
        });
    }
  }, [isAuth, setIsAuth]);

  return userData;
};
