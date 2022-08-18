import { createContext, useContext, useLayoutEffect, useState } from "react";
import { AuthContextType } from "./auth.type";

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

type ProviderProps = {
  children: React.ReactNode;
};

export const AuthProvider: React.FC<ProviderProps> = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);

  useLayoutEffect(() => {
    if (localStorage.getItem("KittyIsAuth")) setIsAuth(true);
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

export const useAuth = () => useContext(AuthContext);
