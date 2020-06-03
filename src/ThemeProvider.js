import React, { useState, useEffect } from "react";

const ThemeContext = React.createContext();
const { Provider } = ThemeContext;

const ThemeProvider = props => {
  // Is this context dependencie always "re-trigger" the Menu Context Provider?
  const [theme, setTheme] = useState({ color: "red" });

  useEffect(() => {
    setTimeout(() => {
      setTheme({ color: "black" });
    }, 10000);
  }, []);

  return <Provider value={{ theme, setTheme }}>{props.children}</Provider>;
};

export { ThemeProvider, ThemeContext };
