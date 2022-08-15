import React from "react";
import { Button } from "../../../../ui-library/components/Button";
import { useAuth } from "../../../auth";
import Styles from "./Header.module.css";

export const Header = () => {
  const { isAuth, setIsAuth } = useAuth();

  return (
    <header className={Styles.header}>
      <span>logo</span>

      {isAuth && (
        <div className={Styles.loggedInBlock}>
          <span>userName</span>
          <Button
            className={Styles.logOutButton}
            onClick={() => setIsAuth((state: any) => !state)}
          >
            Выйти
          </Button>
        </div>
      )}
    </header>
  );
};
