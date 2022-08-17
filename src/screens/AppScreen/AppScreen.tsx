import { useAuth } from "../../features/auth";
import { CatScreen } from "../CatScreen";
import { LoginScreen } from "../LoginScreen";

export const AppScreen = () => {
  const { isAuth } = useAuth();

  return <>{isAuth ? <CatScreen /> : <LoginScreen />}</>;
};
