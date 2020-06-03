import React, { useState, useEffect } from "react";

const UserContext = React.createContext();
const { Provider } = UserContext;

const UserProvider = props => {
  // Is this context dependencie always "re-trigger" the Menu Context Provider?
  const [user, setUser] = useState("A");

  useEffect(() => {
    setTimeout(() => {
      setUser("B");
    }, 5000);
  }, []);

  return <Provider value={{ user, setUser }}>{props.children}</Provider>;
};

export { UserProvider, UserContext };
