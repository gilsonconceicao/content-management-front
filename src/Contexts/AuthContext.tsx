import { FC, ReactNode, createContext, useContext, useMemo, useState } from "react";

interface IApiErrorContextProps {
  login: (token: string) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<IApiErrorContextProps>({
  login: () => { },
  logout: () => { },
  isAuthenticated: false
});

interface IProvider {
  children: ReactNode;
}

export const AuthContextProvider: FC<IProvider> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [token, setToken] = useState<string | undefined>(
    JSON.parse(localStorage.getItem('token')!) ?? undefined
  );

  useMemo(() => {
    if (!!token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, [token])

  const login = (token: string) => {
    localStorage.setItem('token', JSON.stringify(token));
    setToken(token);
  }

  const logout = () => {
    localStorage.removeItem('token');
    setToken(undefined);
  }

  return (
    <AuthContext.Provider
      value={{
        login,
        isAuthenticated,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext); 