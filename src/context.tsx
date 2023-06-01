import React from "react";
import { useLocalStorage } from "./useLocalStorage";

interface contexttype {
  isLogin: {
    name: string;
    id: string;
    status: boolean;
  };
  setIsLogin: (c: object) => void;
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

export const ContextWrapper = (props: { children: any }) => {
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
