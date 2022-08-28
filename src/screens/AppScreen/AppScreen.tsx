import React from "react";
import { useAuth } from "../../features/auth";
import { CatScreen } from "../CatScreen";
import { LoginScreen } from "../LoginScreen";

export const AppScreen: React.FC = () => {
  const { isAuth } = useAuth();

  return <>{isAuth ? <CatScreen /> : <LoginScreen />}</>;
};
