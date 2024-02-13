import * as React from "react";

export const ThemeContext = React.createContext({
  theme: "",
  setTheme: () => {},
});

// eslint-disable-next-line react/prop-types
function ThemeContextProvider({ children }) {
  const [theme, setTheme] = React.useState("light");
  const value = {
    theme: theme,
    setTheme: setTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export default ThemeContextProvider;
