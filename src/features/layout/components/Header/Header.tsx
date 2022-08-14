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
        <div>
          <span>userName</span>
          <Button onClick={() => setIsAuth((state: any) => !state)}>
            logout
          </Button>
        </div>
      )}
    </header>
  );
};
