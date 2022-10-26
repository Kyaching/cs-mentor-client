import React, { createContext, useState } from "react";

export const ThemeContext = createContext();
const ThemeProvider = ({ children }) => {
  const [isDarkMode, setDarkMode] = useState(false);

  const handleMode = () => {
    setDarkMode(!isDarkMode);
  };
  const theme = { isDarkMode, setDarkMode, handleMode };
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
