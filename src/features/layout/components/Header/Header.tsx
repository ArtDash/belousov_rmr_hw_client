import React from "react";

import Styles from "./Header.module.css";
import { AuthAPI } from "../../../auth/auth.service";
import { useAuth } from "../../../auth";
import { Button } from "../../../../ui-library/components/Button";
import { useUserProfile } from "../../../user";

export const Header = () => {
  const { isAuth, setIsAuth } = useAuth();
  const { username } = useUserProfile();

  const handleLogOut = async () => {
    try {
      await AuthAPI.logOut(null);
      setIsAuth((state: any) => !state);
      localStorage.removeItem("KittyIsAuth");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <header className={Styles.header}>
      <span>logo</span>

      {isAuth && (
        <div className={Styles.loggedInBlock}>
          <span>Привет, {username}!</span>
          <Button className={Styles.logOutButton} onClick={handleLogOut}>
            Выйти
          </Button>
        </div>
      )}
    </header>
  );
};
