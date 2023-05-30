import React from "react";
import { useLocalStorage } from "./useLocalStorage";

interface contexttype {
  isLogin: {
    name: string;
    id: null | number;
    status: boolean;
  };
  setIsLogin: (c: {}) => void;
}
export const ContextProvider = React.createContext<contexttype>({
  isLogin: {
    name: "",
    id: null,
    status: false,
  },
  setIsLogin: function (c: {}): void {
    throw new Error("Function not implemented.");
  },
});

export const ContextWrapper = (props: { children: any }) => {
  const [isLogin, setIsLogin] = useLocalStorage("isLogin", {
    name: "",
    id: null,
    status: false,
  });

  return (
    <ContextProvider.Provider value={{ isLogin, setIsLogin }}>
      {props.children}
    </ContextProvider.Provider>
  );
};
