import React from "react";

import Styles from "./Header.module.css";
import { AuthAPI } from "../../../auth/auth.service";
import { useAuth } from "../../../auth";
import { Button } from "../../../../ui-library/components/Button";

export const Header = () => {
  const { isAuth, setIsAuth } = useAuth();

  const handleLogOut = () => {
    AuthAPI.logOut(null).then(setIsAuth((state: any) => !state));
  };

  return (
    <header className={Styles.header}>
      <span>logo</span>

      {isAuth && (
        <div className={Styles.loggedInBlock}>
          <span>userName</span>
          <Button className={Styles.logOutButton} onClick={handleLogOut}>
            Выйти
          </Button>
        </div>
      )}
    </header>
  );
};
