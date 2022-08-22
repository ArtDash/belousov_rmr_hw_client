import {
  createContext,
  useContext,
  useEffect,
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
    if (localStorage.getItem(USER_IS_AUTH_LS)) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, []);

  useEffect(() => {
    if (!localStorage.getItem(USER_IS_AUTH_LS)) {
      setIsAuth(false);
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

export const useAuth = () => useContext(AuthContext);
