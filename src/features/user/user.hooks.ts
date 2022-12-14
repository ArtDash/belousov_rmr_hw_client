import { useEffect, useState } from "react";
import { useAuth } from "../auth";
import { UserDTO } from "./user.entity";
import { UserAPI } from "./user.service";

type User = {
  username: string;
};

export const useUserProfile = (): User => {
  const { isAuth, setIsAuth } = useAuth();
  const [userData, setUserData] = useState({} as User);

  useEffect(() => {
    if (isAuth) {
      void UserAPI.getUserProfile(null).then(({ data: { name } }: UserDTO) =>
        setUserData((state) => ({ ...state, username: name }))
      );
    }
  }, [isAuth, setIsAuth]);

  return userData;
};
