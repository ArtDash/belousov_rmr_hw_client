import React, { useState } from "react";
import { CatScreen } from "../CatScreen";
import { LoginScreen } from "../LoginScreen";

export const AppScreen = () => {
  const [isAuth, setIsAuth] = useState(false);

  return <div>{isAuth ? <CatScreen /> : <LoginScreen />}</div>;
};
