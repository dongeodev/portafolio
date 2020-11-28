import React, { useState } from "react";
import { themes } from "styles";

const ThemeContext = React.createContext({});

export function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState(themes.light);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
export default ThemeContext;
