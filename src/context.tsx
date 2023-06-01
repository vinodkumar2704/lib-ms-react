import React, { ReactNode } from "react";
import { useLocalStorage } from "./useLocalStorage";

interface contexttype {
  isLogin: any;
  setIsLogin: any;
}
export const ContextProvider = React.createContext<contexttype>({
  isLogin: {
    name: "",
    id: "",
    status: false,
  },
  setIsLogin: function (): void {
    throw new Error("Function not implemented.");
  },
});

export const ContextWrapper = (props: { children: ReactNode }) => {
  const [isLogin, setIsLogin] = useLocalStorage("isLogin", {
    name: "",
    id: "",
    status: false,
  });

  return (
    <ContextProvider.Provider value={{ isLogin, setIsLogin }}>
      {props.children}
    </ContextProvider.Provider>
  );
};
