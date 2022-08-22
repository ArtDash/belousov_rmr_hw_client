import React from "react";

import Styles from "./Header.module.css";

// Hooks
import { useAuth, useLogOut } from "../../../auth";
import { useUserProfile } from "../../../user";

// Components
import { Button } from "../../../../ui-library/components/Button";

export const Header: React.FC = () => {
  const { logOut } = useLogOut();
  const { isAuth } = useAuth();
  const { username } = useUserProfile();

  return (
    <header className={Styles.header}>
      <span>logo</span>

      {isAuth && (
        <div className={Styles.loggedInBlock}>
          <span>Привет, {username}!</span>
          <Button className={Styles.logOutButton} onClick={logOut}>
            Выйти
          </Button>
        </div>
      )}
    </header>
  );
};
