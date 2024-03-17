import * as React from "react";

export const ThemeContext = React.createContext({
  theme: "",
  setTheme: () => {},
});

// eslint-disable-next-line react/prop-types
function ThemeContextProvider({ children }) {
  const [theme, setThemeState] = React.useState(() => {
    // Retrieve the theme preference from local storage
    const savedTheme = localStorage.getItem("theme");
    // If there's a saved theme preference, return it; otherwise, return "light"
    return savedTheme ? savedTheme : "dark";
  });
  // Update the theme preference in local storage and state
  const setTheme = (newTheme) => {
    localStorage.setItem("theme", newTheme);
    setThemeState(newTheme);
  };

  const value = {
    theme: theme,
    setTheme: setTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export default ThemeContextProvider;
