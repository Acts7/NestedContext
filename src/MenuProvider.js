import React, { useContext, useState } from "react";
import { UserContext } from "./UserProvider";

const MenusContext = React.createContext();
const { Provider } = MenusContext;

const MenusProvider = props => {
  // Is this context dependencie always "re-trigger" the Menu Context Provider?
  const { user } = useContext(UserContext);
  console.log("Menu Re-render");
  // Menus Context
  const [menu, setMenu] = useState({
    icons: false,
    labels: true,
    leftMenu: true
  });

  return <Provider value={menu}>{props.children}</Provider>;
};

export { MenusProvider, MenusContext };
