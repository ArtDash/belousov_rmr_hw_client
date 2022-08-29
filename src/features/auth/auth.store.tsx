import React, {
  createContext,
  useContext,
  useLayoutEffect,
  useState,
} from "react";
import { USER_IS_AUTH_LS } from "./auth.constants";
import { AuthContextType } from "./auth.type";

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

type ProviderProps = {
  children: React.ReactNode;
};

export const AuthProvider: React.FC<ProviderProps> = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);

  useLayoutEffect(() => {
    if (localStorage.getItem(USER_IS_AUTH_LS) === "true") {
      setIsAuth(true);
    }
  }, []);

  const providerValue = {
    isAuth,
    setIsAuth,
  };

  return (
    <AuthContext.Provider value={providerValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => useContext(AuthContext);
