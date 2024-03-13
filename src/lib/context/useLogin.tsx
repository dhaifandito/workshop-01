"use client"
import React, { createContext, ReactNode, useContext } from "react";

type LoginProps = {
    isLogin: boolean,
    setisLogin : (value: boolean) => void
}

const LoginContext = createContext<LoginProps | undefined>(undefined);

export const LoginProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isLogin, setisLogin] = React.useState<boolean>(false);
  
    return (
      <LoginContext.Provider value={{ isLogin, setisLogin }}>
        {children}
      </LoginContext.Provider>
    );
  };
  
  export const useLogin = () => {
    const context = useContext(LoginContext);
    if (!context) {
      throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
  };