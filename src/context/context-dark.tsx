import { createContext, useState, ReactNode, Dispatch, SetStateAction } from "react";

type ContextType = {
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
};

export const Context = createContext<ContextType>({
  darkMode: false,
  setDarkMode: () => {},
});

type ProviderProps = {
  children: ReactNode;
};

export const Provider = ({ children }: ProviderProps) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  return (
    <Context.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </Context.Provider>
  );
};