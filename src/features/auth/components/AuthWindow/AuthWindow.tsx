import React from "react";
import Styles from "./AuthWindow.module.css";

// Components
import { Button } from "../../../../ui-library/components/Button";
import { Input } from "../../../../ui-library/components/Input";
import { useAuth } from "../../auth.store";
import { API } from "../../../../infrastructure/api.service";

export const AuthWindow = () => {
  const { setIsAuth, inputData, setInputData } = useAuth();
  console.log(inputData);

  const handleAuth = () => {
    API.authenticate(inputData)
      .then(() => fetch("/api/v1/profile"))
      .then((res) => res.json())
      .then(console.log)
      .then(setIsAuth((state: any) => !state));
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
