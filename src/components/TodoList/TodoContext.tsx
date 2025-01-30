import { createContext, useContext, useState } from "react";

type Theme = "light" | "dark";

type ThemeContextType = {
  theme: Theme;
  ToggleTheme: () => void;
};

type ThemeContextProviderPropsType = {
  children: React.ReactNode;
};

const TodoContext = createContext<ThemeContextType | undefined>(undefined);

export const TodoContextProvider = ({
  children,
}: ThemeContextProviderPropsType) => {
  const [theme, setTheme] = useState<Theme>("light");

  const ToggleTheme = () => {
    setTheme((preTheme) => (preTheme === "light" ? "dark" : "light"));
  };

  return (
    <TodoContext.Provider value={{ theme, ToggleTheme }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
