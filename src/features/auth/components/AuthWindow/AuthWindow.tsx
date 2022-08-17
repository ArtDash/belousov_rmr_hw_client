import React from "react";
import Styles from "./AuthWindow.module.css";

// Components
import { Button } from "../../../../ui-library/components/Button";
import { Input } from "../../../../ui-library/components/Input";

// Services and Business-logic
import { useAuth } from "../../auth.store";
import { AuthAPI } from "../../auth.service";

export const AuthWindow = () => {
  const { setIsAuth, inputData, setInputData } = useAuth();

  const handleAuth = async () => {
    try {
      await AuthAPI.authenticate(inputData);
      setIsAuth((state: boolean) => !state);
      localStorage.setItem("KittyIsAuth", "true");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className={Styles.wrapper}>
      <h1>Login</h1>

      <div className={Styles.forms}>
        <Input
          className={Styles.authInput}
          placeholder="Phone"
          type="tel"
          onChange={(e: any) => setInputData({ phone: e.target.value })}
        />
        <Input
          className={Styles.authInput}
          placeholder="Email"
          type="email"
          onChange={(e: any) => setInputData({ email: e.target.value })}
        />
        <Input
          className={Styles.authInput}
          placeholder="Password"
          type="password"
          onChange={(e: any) => setInputData({ password: e.target.value })}
        />
      </div>

      <Button className={Styles.authButton} onClick={handleAuth}>
        Войти
      </Button>
    </div>
  );
};
