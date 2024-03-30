import { createContext, useState } from "react";
import api from "../api";

type AuthContextType = {
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  register: ({
    name,
    email,
    password,
  }: {
    name: string;
    email: string;
    password: string;
  }) => Promise<boolean>;
};

export const AuthContext = createContext({} as AuthContextType);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const register = async ({
    name,
    email,
    password,
  }: {
    name: string;
    email: string;
    password: string;
  }): Promise<boolean> => {
    const response = await api.post<{ status: boolean; user_id: string }>("", {
      name,
      email,
      password,
    });

    return response.data.status;
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, register }}>
      {children}
    </AuthContext.Provider>
  );
};
