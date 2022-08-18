import React from "react";
import Styles from "./AuthWindow.module.css";

// Components
import { AuthForm } from "../AuthForm";

export const AuthWindow: React.FC = () => {
  return (
    <div className={Styles.wrapper}>
      <h1>Login</h1>
      <AuthForm />
    </div>
  );
};
