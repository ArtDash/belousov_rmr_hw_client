import { createContext, useContext, useReducer, useState } from "react";

const AuthContext = createContext<any>(null);

type Props = {
  children: React.ReactNode;
};

const initialInputData = {
  phone: "",
  password: "",
  email: "",
};

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [inputData, setInputData] = useReducer(
    (state: any, action: any) => ({ ...state, ...action }),
    initialInputData
  );

  const providerValue = {
    isAuth,
    setIsAuth,
    inputData,
    setInputData,
  };

  return (
    <AuthContext.Provider value={providerValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
