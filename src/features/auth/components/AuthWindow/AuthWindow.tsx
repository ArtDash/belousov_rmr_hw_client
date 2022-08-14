import React from "react";
import Styles from "./AuthWindow.module.css";

// Components
import { Button } from "../../../../ui-library/components/Button";
import { Input } from "../../../../ui-library/components/Input";
import { useAuth } from "../../auth.store";

export const AuthWindow = () => {
  const { setIsAuth } = useAuth();

  return (
    <div className={Styles.wrapper}>
      <h1>Login</h1>

      <div className={Styles.forms}>
        <Input placeholder="phone" type="tel" />
        <Input placeholder="email" type="email" />
        <Input placeholder="password" type="password" />
      </div>

      <Button onClick={() => setIsAuth((state: any) => !state)}>Войти</Button>
    </div>
  );
};
