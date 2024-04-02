import { createContext } from "react";
import api from "../api";
import usePersistState from "./hooks/usePersistState";

type AuthContextType = {
  isLoggedIn: boolean;
  setLoggedIn: (isLoggedIn: boolean) => void;
  register: ({
    name,
    email,
    password,
  }: {
    name: string;
    email: string;
    password: string;
  }) => Promise<boolean>;
  usersName: string;
  setUsersName: (name: string) => void;
  logout: () => void;
};

export const AuthContext = createContext({} as AuthContextType);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isLoggedIn, setLoggedIn] = usePersistState<boolean>(
    "isLoggedIn",
    false
  );
  const [usersName, setUsersName] = usePersistState<string>("usersName", "");

  const register = async ({
    name,
    email,
    password,
  }: {
    name: string;
    email: string;
    password: string;
  }): Promise<boolean> => {
    try {
      const response = await api.post<{ status: boolean; user_id: string }>(
        "",
        {
          name,
          email,
          password,
        }
      );

      return response.data.status;
    } catch (error) {
      return false;
    }
  };

  const logout = () => {
    setLoggedIn(false);
    setUsersName("");
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        setLoggedIn,
        register,
        usersName,
        setUsersName,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
