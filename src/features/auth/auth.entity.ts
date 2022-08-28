export type AuthCredentials = {
  phone: string;
  email: string;
  password: string;
};

export type useLogInReturnType = {
  logIn: (inputData: AuthCredentials) => Promise<void>;
  authError: boolean;
};

export type useLogOutReturnType = {
  logOut: () => void;
};
