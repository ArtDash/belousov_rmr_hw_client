import { createContext, useContext, useState } from "react";

const AuthContext = createContext<any>(null);

type Props = {
  children: React.ReactNode;
};

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);

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
